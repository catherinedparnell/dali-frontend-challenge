import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './store/localStorage';

import './index.css';
import App from './App';
import { rootReducer } from './reducers';

// persist redux state
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    posts: store.getState().posts,
    people: store.getState().people,
  });
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
