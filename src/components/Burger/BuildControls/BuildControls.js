import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        removed={() => props.ingredientRemoved(ctrl.type)}
        added={() => props.ingredientAdded(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
      />
    ))}
  </div>
);

BuildControls.propTypes = {

};

export default BuildControls;
