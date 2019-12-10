import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addAmount } from '../actions/amount'

const mapStateToProps = state => {
  return {
    totalAmount: state.amount.amount,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => dispatch(addAmount(ownProps.amount))
  }
}

const AddMoney = ({amount, totalAmount, add}) => {
  const buttonText = `Save $${amount}`
  const [clicked, setClicked] = useState(false)
  const [btnText, setBtnText] = useState(buttonText)

  const handleClick = () => {
    setClicked(true)
    add()
    setBtnText(`Saved!`)
    setTimeout(() => {
      setBtnText(buttonText)
    }, 1500);
  }
  return (
    <>
      <button className="btn btn--primary" onClick={handleClick}>{btnText}</button>
      {clicked && (
        <div className="success">
          <p>Congrats! You've saved <span className="amount">${totalAmount}</span> this week!</p>
        </div>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMoney);