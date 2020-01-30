import React from 'react';

const AddAmount = ({ addAmount }) => {
  return (
    <div className="button-container">
      <button className="button button--primary" onClick={() => addAmount(5)}>Save $5</button>
      <button className="button button--primary" onClick={() => addAmount(10)}>Save $10</button>
    </div>
  );
}

export default AddAmount;