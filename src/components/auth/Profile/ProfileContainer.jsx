import React from 'react';
import Profile from './Profile';
import UserHooks from 'hooks/UserHooks';
import BookingHooks from 'hooks/BookingHooks';

const ProfileContainer = () => {
  const fetchBookingsByUserId = BookingHooks.useFetchBookingsByUserId();
  const bookingsByUserId = BookingHooks.useBookingsByUserId();
  const fetchUserById = UserHooks.useFetchUserById();
  const userById = UserHooks.useUserById();
  const deleteUser = UserHooks.useDeleteUser();
  const { isLoading: userIsLoading } = UserHooks.useUser();

  const allProps = {
    fetchBookingsByUserId,
    bookingsByUserId,
    fetchUserById,
    userById,
    deleteUser,
    userIsLoading
  };

  return (
    <Profile {...allProps} />
  );
};

export default ProfileContainer;
