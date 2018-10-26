import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

const initialState = {};

const middleware = applyMiddleware(logger, thunkMiddleware);

const makeStore = () => {
  const store = createStore(reducer, initialState, compose(middleware));
  return store;
};

export default makeStore;
