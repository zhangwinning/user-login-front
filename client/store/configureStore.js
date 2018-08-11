import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {
  routerMiddleware,
} from 'react-router-redux';
import thunk from 'redux-thunk';
// import promiseMiddleware from '../lib/promiseMiddleware';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState, history) {
  let logger = createLogger({
    collapsed: true,
  });
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [ thunk, routerMiddleware(history) ];
  process.env.NODE_ENV !== 'production' && middleware.push(logger);
  let store;

  store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
  ));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
