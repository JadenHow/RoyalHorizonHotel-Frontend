import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { postLogoutRequest } from 'features/auth/authSlice';

export default function useLogout() {
  const dispatch = useDispatch();

  const logout = useCallback(
    () => {
      dispatch(postLogoutRequest());
    },
    [dispatch]
  );

  return logout;
};
