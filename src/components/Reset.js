import React from 'react';
import { connect } from 'react-redux'
import { resetAmount } from '../actions/amount';

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(resetAmount())
  }
}

const Reset = ({
  reset
}) => {

  return (
    <>
      <button className="btn" onClick={reset}>Reset Amount</button>
      <p className="reset-message">
        Reset amount once you’ve put the saved amount into savings or paid off your credit card.
      </p>
    </>
  );
}

export default connect(null, mapDispatchToProps)(Reset);