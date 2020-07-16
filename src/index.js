import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore }  from 'redux';

import App from 'components/App';
import reducers from 'reducers';

// to connect react app with redux
// wrap a App component in a Provider component then
// pass a createStore function to a store with
// a argument of list of reducers and initialize with
// an empty obj

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector("#root")
);