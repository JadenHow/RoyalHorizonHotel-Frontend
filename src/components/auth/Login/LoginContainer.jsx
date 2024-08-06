import React from 'react';
import Login from './Login';
import AuthHooks from 'hooks/AuthHooks';

const LoginContainer = () => {
  const login = AuthHooks.useLogin();

  return (
    <Login onLogin={login} />
  );
};

export default LoginContainer;
