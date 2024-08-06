import React from 'react';
import Registration from './Registration';
import AuthHooks from 'hooks/AuthHooks';

const RegistrationContainer = () => {
  const register = AuthHooks.useRegister();

  return (
    <Registration onRegister={register} />
  );
};

export default RegistrationContainer;
