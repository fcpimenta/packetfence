package pf::Report;

use Moose;
use pf::error qw(is_error is_success);
use pf::log;
use Tie::IxHash;
use List::MoreUtils qw(any);

has 'id' => (is => 'rw', isa => 'Str');

has 'type' => (is => 'rw', isa => 'Str');

has 'description' => (is => 'rw', isa => 'Str');

has 'group_field' => (is => 'rw', isa => 'Str');

has 'date_field' => (is => 'rw', isa => 'Str');

has 'order_fields' => (is => 'rw', isa => 'ArrayRef[Str]');

has 'base_conditions' => (is => 'rw', isa => 'ArrayRef[HashRef]');

has 'base_conditions_operator' => (is => 'rw', isa => 'Str', default => 'all');

has 'joins' => (is => 'rw', isa => 'ArrayRef[Str]', );

has 'searches' => (is => 'rw', isa => 'ArrayRef[HashRef]');

has 'base_table' => (is => 'rw', isa => 'Str');

has 'columns' => (is => 'rw', isa => 'ArrayRef[Str]');

has 'person_fields' => (is => 'rw', isa => 'ArrayRef[Str]');

has 'node_fields' => (is => 'rw', isa => 'ArrayRef[Str]');

sub ensure_default_infos {
    my ($self, $infos) = @_;
    return;
}


sub build_query_options {
    return (422, { message => "unimplemented" });
}

sub query {
    my ($self, %infos) = @_;
    $self->ensure_default_infos(\%infos);
    my ($sql, $params) = $self->generate_sql_query(%infos);
    get_logger->debug(sub { "Executing query : $sql, with the following params : " . join(", ", map { "'$_'" } @$params) });
    return $self->_db_data($sql, @$params);
}

sub _db_data {
    my ($self, $sql, @params) = @_;

    my ( $ref, @array );
    my ($status, $sth) = pf::dal->db_execute($sql, @params);
    if (is_error($status)) {
        return ($status);
    }
    # Going through data as array ref and putting it in ordered hash to respect the order of the select in the final report
    my $fields = $sth->{NAME};
    while ( $ref = $sth->fetchrow_arrayref() ) {
        tie my %record, 'Tie::IxHash';
        @record{@$fields} = @$ref;
        push( @array, \%record );
    }
    $sth->finish();
    return (200, \@array);
}

=head2 is_person_field

Check if a field is part of the person fields

=cut

sub is_person_field {
    my ($self, $field) = @_;
    return any { $_ eq $field } @{$self->person_fields};
}

=head2 is_node_field

Check if a field is part of the node fields

=cut

sub is_node_field {
    my ($self, $field) = @_;
    return any { $_ eq $field } @{$self->node_fields};
}

sub validate_query {
    my ($self, $query) = @_;
    return (422, {message => "unimplemented"});
}

=head1 AUTHOR

Inverse inc. <info@inverse.ca>

=head1 COPYRIGHT

Copyright (C) 2016-2021 Inverse inc.

=head1 LICENSE

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301,
USA.

=cut

1;

