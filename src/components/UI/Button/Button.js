import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const Button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >{props.children}
  </button>
);

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default Button;
