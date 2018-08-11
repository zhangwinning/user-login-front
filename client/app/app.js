import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
import routes from './Router';


const history = createBrowserHistory
const initialState = window.___INITIAL_STATE__;
const store = configureStore(initialState,history);
render(
  <Provider store={store}>
    <Router {...{ history }}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
