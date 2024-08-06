import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchUserByEmailRequest } from 'features/user/userSlice';

export default function useFetchUserByEmail() {
  const dispatch = useDispatch();

  const fetchUserByEmail = useCallback(
    (email, token) => {
      dispatch(fetchUserByEmailRequest({ email, token }));
    },
    [dispatch]
  );

  return fetchUserByEmail;
};
