import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { postRegisterRequest } from 'features/auth/authSlice';

export function useRegister() {
  const dispatch = useDispatch();

  const register = useCallback(
    (firstname, lastname, email, password) => {
      dispatch(postRegisterRequest({ firstname, lastname, email, password }));
    },
    [dispatch]
  );

  return register;
};
