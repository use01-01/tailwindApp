import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Dropdown = () => {
  const { showMenu, toggleMenu, setShowMenu, menuClick } = useGlobalContext();
  const refMenu = useRef();

  useEffect(() => {
    const hideOutsideClick = (e) => {
      if (
        showMenu &&
        refMenu.current &&
        !refMenu.current.contains(e.target) &&
        !menuClick.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', hideOutsideClick);
    return () => {
      document.removeEventListener('mousedown', hideOutsideClick);
    };
  }, [showMenu]);

  return (
    <div
      className={
        showMenu
          ? 'grid grid-rows-4 gap-y-1 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggleMenu}
      ref={refMenu}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
