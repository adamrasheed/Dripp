import React from 'react';
import logo from './dripp-logo.svg'
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Dripp" className="logo"/>
      <div className="button-container">
        <button className="button button--primary">Save $5</button>
        <button className="button button--primary">Save $10</button>
      </div>

      <div className="message-container">
        <p className="message">
          Congrats! You've saved <span className="message-amount">$65</span> so far!
        </p>
      </div>

      <p className="total-count">You've saved $65 so far.</p>

      <div className="reset-container">
        <button className="button reset-button">Reset Amount</button>
        <p className="reset-disclaimer">
          Reset amount once you’ve put the saved amount into savings or paid off your credit card.
        </p>
      </div>
    </div>
  );
}

export default App;
