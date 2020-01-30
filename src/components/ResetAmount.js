import React from 'react';
import { connect } from 'react-redux'

import { RESET_AMOUNT } from '../reducers';

const mapDispatchToProps = dispatch => ({
  resetAmount: () => dispatch({ type: RESET_AMOUNT })
})

const ResetAmount = ({ resetAmount }) => {

  const handleReset = () => {
    const msg = 'Are you sure you want to reset the amount to $0?'
    if (window.confirm(msg)) {
      resetAmount()
    }
  }
  return (
    <div className="reset-container">
      <button className="button reset-button" onClick={handleReset}>Reset Amount</button>
      <p className="reset-disclaimer">
        Reset amount once you’ve put the saved amount into savings or paid off your credit card.
        </p>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ResetAmount);