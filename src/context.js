import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClick, setMenuClick] = useState('');
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <AppContext.Provider
      value={{ showMenu, setShowMenu, toggleMenu, menuClick, setMenuClick }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
