import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';


// to connect react app with redux
// wrap a App component in a Provider tag then
// pass a createStore function to a store with
// a argument of list of reducers and initialize with
// an empty obj

// to fix the test file. we have to export
// and root function that wrap a test component with a Provider tag

// to fix CommentList test file we will have to
// destrucuering the props

export default ({ children , initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}  {/* this is equal to <App />  */}
    </Provider>
  )
}