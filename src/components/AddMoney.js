import React from 'react';
import { connect } from 'react-redux'
import { addAmount } from '../actions/amount'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => dispatch(addAmount(ownProps.amount))
  }
}

const AddMoney = ({amount, add}) => {
  return ( 
    <button className="btn btn--primary" onClick={add}>Save ${amount}</button>
  );
}

export default connect(null, mapDispatchToProps)(AddMoney);