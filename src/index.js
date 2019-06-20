import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import './main.css';
import { App } from './components';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const createStoreWithMiddleware = () => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxPromiseMiddleware()))
  );
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
