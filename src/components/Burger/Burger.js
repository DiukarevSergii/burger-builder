import React from 'react';

import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  // eslint-disable-next-line react/no-array-index-key
    .map((key) => [...Array(props.ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />))
    .reduce((arr, element) => arr.concat(element), []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (

    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};


export default Burger;
