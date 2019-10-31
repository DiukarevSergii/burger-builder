import React, { Component } from 'react';

import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
    };
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    let newPrice = Number.parseFloat(oldPrice) + Number.parseFloat(priceAddition);
    newPrice = newPrice.toFixed(2);

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount > 0) {
      const updateCount = oldCount - 1;
      const updateIngredients = {
        // eslint-disable-next-line react/no-access-state-in-setstate
        ...this.state.ingredients,
      };
      updateIngredients[type] = updateCount;

      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      let newPrice = Number.parseFloat(oldPrice) - Number.parseFloat(priceAddition);
      newPrice = newPrice.toFixed(2);

      this.setState({
        totalPrice: newPrice,
        ingredients: updateIngredients,
      });
      this.updatePurchaseState(updateIngredients);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Diukarev Serhii',
        address: {
          street: 'Palo Alto, San Francisco Bay Area',
          country: 'USA',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios.post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(() => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  updatePurchaseState(ingredients) {
    const total = Object.values(ingredients)
      .reduce((sum, item) => sum + item, 0);
    this.setState({ purchasable: total > 0 });
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    Object.keys(disabledInfo).forEach((key) => {
      disabledInfo[key] = disabledInfo[key] <= 0;
    });

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          { orderSummary }
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
