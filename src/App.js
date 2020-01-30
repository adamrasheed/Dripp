import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { amountReducer } from './reducers';
import { saveState, loadState } from './localStorage';

import AddAmount from './components/AddAmount';
import Message from './components/Message';
import ResetAmount from './components/ResetAmount';

import logo from './dripp-logo.svg'
import './App.css';

const persistedState = loadState()

const store = createStore(
  amountReducer,
  persistedState
)

store.subscribe(() => {
  saveState(store.getState())
})

const App = () => (
  <Provider store={store}>
    <div className="app">
      <img src={logo} alt="Dripp" className="logo" />
      <AddAmount />
      <Message />
      <ResetAmount />
    </div>
  </Provider>
);

export default App;
