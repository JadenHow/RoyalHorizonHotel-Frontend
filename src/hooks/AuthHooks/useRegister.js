import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { postRegisterRequest } from 'features/auth/authSlice';

export default function useRegister() {
  const dispatch = useDispatch();

  const register = useCallback(
    ({ firstName, lastName, email, password }) => {
      dispatch(postRegisterRequest({ firstName, lastName, email, password }));
    },
    [dispatch]
  );

  return register;
};
