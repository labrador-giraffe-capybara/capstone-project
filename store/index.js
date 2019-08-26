import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import userpins from './userpins';
import walks from './walks';
import activeWalk from './activeWalk';
import allPastWalks from './pastWalks';
import savedWalks from './savedWalks';
import attractions from './attractions';

const reducer = combineReducers({
  user,
  userpins,
  allPastWalks,
  savedWalks,
  walks,
  activeWalk,
  attractions,
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, middleware);

export default store;
export * from './user';
