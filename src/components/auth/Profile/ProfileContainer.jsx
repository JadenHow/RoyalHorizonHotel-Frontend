import React from 'react';
import Profile from './Profile';
import UserHooks from 'hooks/UserHooks';
import BookingHooks from 'hooks/BookingHooks';

const ProfileContainer = () => {
  const fetchBookingsByUserId = BookingHooks.useFetchBookingsByUserId();
  const bookingsByUserId = BookingHooks.useBookingsByUserId();
  const fetchUsers = UserHooks.useFetchUsers();
  const users = UserHooks.useUsers();
  const deleteUser = UserHooks.useDeleteUser();

  const allProps = {
    fetchBookingsByUserId,
    bookingsByUserId,
    fetchUsers,
    users,
    deleteUser
  };

  return (
    <Profile {...allProps} />
  );
};

export default ProfileContainer;
