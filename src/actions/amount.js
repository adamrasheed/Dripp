import { ADD_AMOUNT, RESET_AMOUNT } from '../actionTypes'

export const addAmount = (value) => {
  return {
    type: ADD_AMOUNT,
    value,
  }
}

export const resetAmount = () => {
  return {
    type: RESET_AMOUNT,
  }
}