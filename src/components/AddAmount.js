import React from 'react';
import { connect } from 'react-redux'
import { ADD_AMOUNT } from '../reducers';

const mapDispatchToProps = dispatch => ({
  addAmount: (amount) => dispatch({ type: ADD_AMOUNT, amount })
})

const AddAmount = ({ addAmount }) => {
  return (
    <div className="button-container">
      <button className="button button--primary" onClick={() => addAmount(5)}>Save $5</button>
      <button className="button button--primary" onClick={() => addAmount(10)}>Save $10</button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddAmount);