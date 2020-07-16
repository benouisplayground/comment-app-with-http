import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import Root from 'Root';

// to connect react app with redux
// wrap a App component in a Provider tag then
// pass a createStore function to a store with
// a argument of list of reducers and initialize with
// an empty obj

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);