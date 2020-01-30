import React, { useState, useEffect } from 'react';
import logo from './dripp-logo.svg'
import AddAmount from './components/AddAmount';

import './App.css';
import Message from './components/Message';
import ResetAmount from './components/ResetContainer';

const App = () => {
  const initialState = () => Number(window.localStorage.getItem('count')) || 0
  const [count, setCount] = useState(initialState)

  const addAmount = (amount) => {
    setCount(count + amount)
  }

  const resetAmount = () => {
    const msg = 'Are you sure you want to reset the amount to $0?'
    if (window.confirm(msg)) {
      setCount(0)
    }
  }

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count])


  return (
    <div className="app">
      <img src={logo} alt="Dripp" className="logo" />
      <AddAmount addAmount={addAmount} />
      <Message count={count} />
      <ResetAmount resetAmount={resetAmount} />
    </div>
  );
}

export default App;
