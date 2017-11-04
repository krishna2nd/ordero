/* global __DEVELOPMENT__ */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import state from './state';

let middleware = applyMiddleware(thunk);

window.__DEVELOPMENT__ = true;

if (__DEVELOPMENT__) {
  const { createLogger } = require('redux-logger');
  middleware = applyMiddleware(thunk, createLogger());
}

export default createStore(reducer, middleware);