// npm packages
import 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// our packages
import { rootReducer } from './root-reducer';
import { rootEpic } from './root-epic';

// needed so that we can attach properties to window object
declare let window: any;

// instantiate epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

// pick debug or dummy enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(
  applyMiddleware(epicMiddleware)
);

// create store
export const store = createStore(rootReducer, middlewares);
