import React from 'react';
const ResetAmount = ({ resetAmount }) => {
  return (
    <div className="reset-container">
      <button className="button reset-button" onClick={resetAmount}>Reset Amount</button>
      <p className="reset-disclaimer">
        Reset amount once you’ve put the saved amount into savings or paid off your credit card.
        </p>
    </div>
  );
}

export default ResetAmount;