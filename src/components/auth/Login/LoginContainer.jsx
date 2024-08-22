import React from 'react';
import Login from './Login';
import AuthHooks from 'hooks/AuthHooks';

const LoginContainer = () => {
  const login = AuthHooks.useLogin();
  const { error, isLoading } = AuthHooks.useAuth();

  const allProps = {
    onLogin: login,
    error,
    isLoading
  };

  return (
    <Login {...allProps} />
  );
};

export default LoginContainer;
