#!/bin/bash

if [ -z "$1" ]; then
  echo "Missing output parameter"
  echo "Usage export.sh /path/to/export.tgz [--force]"
  exit 1
fi

if [ "$2" = "--force" ];then
  echo "Force flag enabled"
  mtime=""
else
  mtime="-mtime -1"
fi

set -o nounset -o pipefail -o errexit

source /usr/local/pf/addons/full-import/helpers.functions
source /usr/local/pf/addons/full-import/database.functions

output="$1"

db_dump=`find /root/backup/ -name 'packetfence-db-dump-*' $mtime | sort -h | tail -1`

if [ -z "$db_dump" ]; then
  echo "Unable to find a database dump that was done in the last 24 hours. Add --force to ignore this."
  exit 1
fi

files_dump=`find /root/backup/ -name 'packetfence-files-dump-*' $mtime | sort -h | tail -1`

if [ -z "$files_dump" ]; then
  echo "Unable to find a files dump that was done in the last 24 hours. Add --force to ignore this."
  exit 1
fi

build_dir=`mktemp -d`

function cleanup() {
  echo "Cleaning temporary directory"
  rm -fr $build_dir
}
trap cleanup EXIT

pushd $build_dir

main_splitter
echo "Copying dump files to temporary export directory"
cp -a $db_dump $build_dir/
cp -a $files_dump $build_dir/

mariadb_args=""

if echo "$db_dump" | grep '\.sql.gz$' >/dev/null; then
  if ! test_db_connection_no_creds; then
    echo -n "Please enter the root password for MariaDB:"
    read -s mariadb_root_pass
    mariadb_args="$mariadb_args -p$mariadb_root_pass"
  fi

  echo "Database dump uses mysqldump. Exporting the grants from the database. Enter the MariaDB root password if prompted to"
  mysql $mariadb_args --skip-column-names -A -e"SELECT CONCAT('SHOW GRANTS FOR ''',user,'''@''',host,''';') FROM mysql.user WHERE user<>''" | mysql $mariadb_args --skip-column-names -A | sed 's/$/;/g' > grants.sql
fi

main_splitter
echo "Building list of configuration files for this current version"
perl -I/usr/local/pf/lib_perl/lib/perl5/ -I/usr/local/pf/lib -Mpf::file_paths -e 'print join("\n", @pf::file_paths::stored_config_files) . "\n"' > stored_config_files.txt

main_splitter
echo "Computing additional files that are referenced in the configuration"
add_files="`/usr/local/pf/addons/full-import/find-extra-files.pl`"
for f in $add_files; do
  if dirname $f | grep '^/usr/local/pf/' > /dev/null; then
    echo "Found reference to external file that is in the PF directory ($f)"
    echo $f >> add_files.txt
  else
    echo "Found reference to external file that is outside the PF directory ($f)"
    base_dir=`dirname $f`
    mkdir -p ./$base_dir
    check_code $?
    cp -a $f ./$base_dir/
    check_code $?
    echo $f >> add_files.txt
  fi
done

main_splitter
echo "Creating export archive"
tar -cvzf $output *
check_code $?

main_splitter
echo "Done exporting to $output"

popd > /dev/null

