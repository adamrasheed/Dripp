export const ADD_AMOUNT = 'ADD_AMOUNT'
export const RESET_AMOUNT = 'RESET_AMOUNT'

const initialState = {
  count: 0,
  name: 'adam'
}
export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      const count = state.count + action.amount
      return {
        ...state,
        count,
      }

    case RESET_AMOUNT:
      return {
        ...state,
        count: 0,
      }

    default:
      return state;
  }
}