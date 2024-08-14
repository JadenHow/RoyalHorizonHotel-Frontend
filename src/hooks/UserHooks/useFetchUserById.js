import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchUserByIdRequest } from 'features/user/userSlice';

export default function useFetchUserById() {
  const dispatch = useDispatch();

  const fetchUserById = useCallback(
    ({ id, token }) => {
      dispatch(fetchUserByIdRequest({ id, token }));
    },
    [dispatch]
  );

  return fetchUserById;
};
