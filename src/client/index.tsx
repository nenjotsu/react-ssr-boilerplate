import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import configureStore from '../store/configureStore';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

// window.MyNamespace = window.MyNamespace || {};

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../containers/Home', () => {
    hydrate(
      <Provider store={store}>
        <Home />
      </Provider>,
      document.getElementById('root')
    );
  });
}
