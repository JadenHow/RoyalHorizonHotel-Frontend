import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteUserRequest } from 'features/user/userSlice';

export default function useDeleteUser() {
  const dispatch = useDispatch();

  const deleteUser = useCallback(
    (userId, token) => {
      dispatch(deleteUserRequest({ userId, token }));
    },
    [dispatch]
  );

  return deleteUser;
};
