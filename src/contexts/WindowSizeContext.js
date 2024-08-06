import React, { createContext, useContext, useEffect, useState } from 'react';

const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    isSmall: window.matchMedia('(max-width: 600px)').matches,
    isMedium: window.matchMedia('(min-width: 601px) and (max-width: 1200px)').matches,
    isLarge: window.matchMedia('(min-width: 1201px)').matches
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isXSmall: window.matchMedia('(max-width: 575px)').matches,
        isSmall: window.matchMedia('(min-width: 576px) and (max-width: 767px)').matches,
        isMedium: window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches,
        isLarge: window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches,
        isXLarge: window.matchMedia('(min-width: 1200px) and (max-width: 1399px)').matches,
        isXXLarge: window.matchMedia('(min-width: 1400px)').matches
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error('useWindowSize must be used within a WindowSizeProvider');
  }
  return context;
};
