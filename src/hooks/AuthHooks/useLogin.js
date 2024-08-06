import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { postLoginRequest } from 'features/auth/authSlice';

export function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback(
    (username, password) => {
      dispatch(postLoginRequest({ username, password }));
    },
    [dispatch]
  );

  return login;
};
