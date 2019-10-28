import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a
      className={props.active ? classes.active : null}
      href={props.link}
    >{props.children}
    </a>
  </li>
);

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavigationItem;
