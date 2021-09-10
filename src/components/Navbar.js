import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { toggleMenu, setMenuClick } = useGlobalContext();
  const refMenuButton = useRef();
  useEffect(() => {
    setMenuClick(refMenuButton);
  }, []);
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-lg font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        EGG
      </Link>
      <div
        className="px-4 cursor-pointer md:hidden"
        onClick={toggleMenu}
        ref={refMenuButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div class="pr-8 md:block hidden">
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
    </nav>
  );
};

export default Navbar;
