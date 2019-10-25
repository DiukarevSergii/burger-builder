import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const Modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
