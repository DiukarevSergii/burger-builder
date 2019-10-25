import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const Toolbar = () => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

Toolbar.propTypes = {

};

export default Toolbar;
