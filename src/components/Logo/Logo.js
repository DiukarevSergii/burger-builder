import React from 'react';
// import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger" />
  </div>
);

Logo.propTypes = {

};

export default Logo;
