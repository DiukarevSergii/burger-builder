import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>

);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
