import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AuthHooks from 'hooks/AuthHooks';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const auth = AuthHooks.useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    let logoutTimer;

    if (storedToken) {
      setIsLoggedIn(true);
      logoutTimer = setTimeout(onLogout, 3600000); // 1 hour
    } else {
      if (Object.keys(auth).length !== 0) {
        const { userId, userRole, token } = auth;
        setIsLoggedIn(true);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);
        localStorage.setItem('token', token);
        logoutTimer = setTimeout(onLogout, 3600000); // 1 hour
      }
    }

    return () => clearTimeout(logoutTimer);
  }, [auth]);

  const onLogout = useCallback(() => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
