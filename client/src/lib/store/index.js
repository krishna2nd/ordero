import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

let middleware = applyMiddleware(thunk);

if (__DEVELOPMENT__) {
  import { createLogger } from 'redux-logger';
  const middleware = applyMiddleware(thunk, createLogger());
}

export default createStore(reducer, middleware);