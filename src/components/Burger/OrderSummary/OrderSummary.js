import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((key) => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>
          {key}
        </span>
        : {props.ingredients[key]}
      </li>
    ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
