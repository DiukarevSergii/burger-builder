import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SideDrawer = () => (
  <div className={classes.SideDrawer}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </div>
);
SideDrawer.propTypes = {

};

export default SideDrawer;
