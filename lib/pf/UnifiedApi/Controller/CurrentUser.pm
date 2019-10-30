package pf::UnifiedApi::Controller::CurrentUser;

=head1 NAME

pf::UnifiedApi::Controller::CurrentUser -

=head1 DESCRIPTION

pf::UnifiedApi::Controller::CurrentUser

=cut

use strict;
use warnings;
use Mojo::Base 'pf::UnifiedApi::Controller::RestRoute';
use pf::admin_roles qw(admin_allowed_options %ADMIN_ROLES);
use pf::Authentication::constants;

sub allowed_options {
    my ($self, $option, $key, $standard_options) = @_;
    my $roles = $self->stash->{admin_roles};
    my @options = admin_allowed_options($roles, $option);
    if (@options == 0) {
        @options = $standard_options->($self, $option);
    }

    return $self->render_items($key, @options);
}

sub allowed_unreg_date {
    my ($self) = @_;
    return $self->allowed_options('allowed_unreg_date', 'undeg_date', sub {} );
}

sub allowed_roles {
    my ($self) = @_;
    return $self->allowed_options('allowed_roles', 'role', sub {} );
}

sub allowed_node_roles {
    my ($self) = @_;
    return $self->allowed_options('allowed_node_roles', 'role', sub {} );
}

sub allowed_access_levels {
    my ($self) = @_;
    return $self->allowed_options('allowed_access_levels', 'access_level', sub { sort keys %ADMIN_ROLES } );
}

sub allowed_actions {
    my ($self) = @_;
    return $self->allowed_options('allowed_actions', 'action', sub { map { @$_ } values %Actions::ACTIONS });
}

sub allowed_access_durations {
    my ($self) = @_;
    my $stash = $self->stash;
    my $roles = $stash->{admin_roles};
    return $self->render_items( access_duration => admin_allowed_options($roles, 'allowed_access_durations'));
}

sub render_items {
    my ($self, $key, @items) = @_;
    return $self->render(
        json => {
            items => [ map {  { $key => $_ } } @items]
        }
    );
}

=head1 AUTHOR

Inverse inc. <info@inverse.ca>

=head1 COPYRIGHT

Copyright (C) 2005-2019 Inverse inc.

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
