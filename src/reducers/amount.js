import { ADD_AMOUNT, RESET_AMOUNT } from '../actionTypes'

export const initialAmountState = {
  amount: 0
}

const amountReducer = (state = initialAmountState, action) => {

  const {amount: initialAmount} = state

  switch (action.type) {
    case ADD_AMOUNT:
      return {
        ...state,
        amount: initialAmount + action.value
      }

    case RESET_AMOUNT:
      return {
        ...state,
        amount: initialAmountState.amount
      }
  
    default:
      return state;
  }
}

export default amountReducer