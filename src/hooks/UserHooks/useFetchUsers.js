import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchUsersRequest } from 'features/user/userSlice';

export default function useFetchUsers() {
  const dispatch = useDispatch();

  const fetchUsers = useCallback(
    (token) => {
      dispatch(fetchUsersRequest({ token }));
    },
    [dispatch]
  );

  return fetchUsers;
};
