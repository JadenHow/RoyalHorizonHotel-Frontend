import React from 'react';
import Logout from './Logout';
import AuthHooks from 'hooks/AuthHooks';

const LogoutContainer = () => {
  const logout = AuthHooks.useLogout();

  const allProps = {
    logout
  };

  return (
    <Logout {...allProps} />
  );
};

export default LogoutContainer;
