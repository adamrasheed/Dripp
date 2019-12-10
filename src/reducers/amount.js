import { ADD_AMOUNT, RESET_AMOUNT } from '../actionTypes'
import moment from 'moment'

export const initialAmountState = {
  amount: 0,
  amountThisWeek: 0
}

const amountReducer = (state = initialAmountState, action) => {

  const {amount: initialAmount} = state

  switch (action.type) {
    case ADD_AMOUNT:
      return {
        ...state,
        date: new Date(),
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