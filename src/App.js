import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { Route, Switch } from 'react-router';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const App = () => {
  const { showMenu, setShowMenu } = useGlobalContext();
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar />
      <Dropdown />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
