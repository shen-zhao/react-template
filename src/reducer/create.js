import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import app from './modules/app';

const reducer = combineReducers({
  app
})

export default function create(initialState = {}) {
  const middleware = [thunkMiddleware, promiseMiddleware];

  let finalCreateStore;

  finalCreateStore = applyMiddleware(...middleware)(createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
}
