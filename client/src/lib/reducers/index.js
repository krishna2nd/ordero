import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import home from './home';
import item from './item';
import order from './order';

const rootReducer = combineReducers({
  user,
  home,
  item,
  order,
  routing: routerReducer
});

export default rootReducer;