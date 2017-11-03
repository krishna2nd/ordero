import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';

import App from './App';
import store from './lib/store';
import './style/index.css';


class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

/* global document */
ReactDOM.render(<Main />, document.getElementById('root'));
