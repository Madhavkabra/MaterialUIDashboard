import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import NavigationBar from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import OutsideAlerter from './Components/OutsideClickHandler';
import styles from './app.module.css';


function App() {
  const [showNav, setShowNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const closeNav = () => {
    setShowNav(false)
  }

  return (
    <div className={styles.app}>
      <Header setShowNav={setShowNav} showNav={showNav} />
      {width < breakpoint ?
        <OutsideAlerter actionHandler={closeNav}>
          <NavigationBar showNav={showNav} />
        </OutsideAlerter>
        : <NavigationBar showNav={showNav} />
      }
      <Dashboard />
    </div>
  );
}

export default App;
