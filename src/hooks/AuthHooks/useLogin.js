import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { postLoginRequest } from 'features/auth/authSlice';

export default function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => {
      dispatch(postLoginRequest({ email, password }));
    },
    [dispatch]
  );

  return login;
};
