import React, { useState } from 'react';
import logo from './dripp-logo.svg'
import './App.css';

const App = () => {
  const initialState = 0
  const [count, setCount] = useState(initialState)

  const addAmount = (amount) => {
    setCount(count + amount)
  }

  const resetAmount = () => {
    const msg = 'Are you sure you want to reset the amount to $0?'
    if (window.confirm(msg)) {
      setCount(initialState)
    }
  }

  return (
    <div className="app">
      <img src={logo} alt="Dripp" className="logo"/>
      <div className="button-container">
        <button className="button button--primary" onClick={() => addAmount(5)}>Save $5</button>
        <button className="button button--primary" onClick={() => addAmount(10)}>Save $10</button>
      </div>

      <div className="message-container">
        <p className="message">
          Congrats! You've saved <span className="message-amount">${count}</span> so far!
        </p>
      </div>

      <p className="total-count">You've saved ${count} so far.</p>

      <div className="reset-container">
        <button className="button reset-button" onClick={resetAmount}>Reset Amount</button>
        <p className="reset-disclaimer">
          Reset amount once you’ve put the saved amount into savings or paid off your credit card.
        </p>
      </div>
    </div>
  );
}

export default App;
