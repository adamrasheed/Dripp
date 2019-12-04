import React, { useState } from 'react';
import drippLogo from './dripp-logo.svg'
import './App.css';

const App = () => {
  const initialAmount = 0
  const [amount, setAmount] = useState(initialAmount)

  const handleAddAmount = ({ value = 5}) => {
   setAmount((prevAmount) => prevAmount + value)
  }

  const handleResetAmount = ({value = initialAmount}) => {
    const msg = `Are you sure you want to reset?`
    if (window.confirm(msg)) {
      setAmount(initialAmount)
    }
  }
  return (
    <div className="app">
      <img src={drippLogo} alt="Dripp" className="logo" />

      <button className="btn btn--primary" onClick={handleAddAmount}>Save $5</button>

      <div className="success">
  <p>Congrats! You've saved <span className="amount">${amount}</span> this week!</p>
      </div>

      <p className="total-amount">You've saved ${amount} in total.</p>

      <button className="btn" onClick={handleResetAmount}>Reset Amount</button>
      <p className="reset-message">
        Reset amount once you’ve put the saved amount into savings or paid off your credit card.
      </p>
    </div>
  );
}

export default App;
