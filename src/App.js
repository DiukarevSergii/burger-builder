import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>
            Test
          </p>
        </Layout>
      </div>
    );
  }
}

export default App;
