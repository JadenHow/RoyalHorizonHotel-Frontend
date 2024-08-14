import React from 'react';
import Registration from './Registration';
import { AuthHooks } from 'hooks/AuthHooks';

const RegistrationContainer = () => {
  const register = AuthHooks.useRegister();
  const { error, isLoading } = AuthHooks.useAuth();

  const allProps = {
    onRegister: register,
    error,
    isLoading
  };

  return (
    <Registration {...allProps} />
  );
};

export default RegistrationContainer;
