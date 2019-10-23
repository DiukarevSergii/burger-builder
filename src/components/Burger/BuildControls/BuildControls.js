import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = () => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl label={ctrl.length} key={ctrl.label} />
    ))}
  </div>
);

BuildControls.propTypes = {

};

export default BuildControls;
