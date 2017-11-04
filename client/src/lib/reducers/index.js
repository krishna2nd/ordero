import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './user';
import categories from './category';
import items from './item';
import orders from './order';


const rootReducer = combineReducers({
  users,
  items,
  categories,
  orders,
  routing: routerReducer
});

export default rootReducer;