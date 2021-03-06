import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };

    axios.interceptors.request.use((req) => {
      this.setState({ error: null });
      return req;
    });
    axios.interceptors.response.use((res) => res, (error) => {
      this.setState({ error });
    });
  }

  errorConfirmedHandler = () => {
    this.setState({ error: null });
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.error}
          modalClosed={this.errorConfirmedHandler}
        >
          {this.state.error ? this.state.error.message : null}
        </Modal>
        <WrappedComponent />
      </Aux>
    );
  }
};

export default withErrorHandler;
