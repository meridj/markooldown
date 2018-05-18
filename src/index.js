/*
** Packages
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

/**
 * Reducers
 */
import reducers from './reducers';

/*
** Containers
*/
import { Markooldown } from './containers';

/*
** Styles
*/
import './index.css';

const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <Markooldown />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
