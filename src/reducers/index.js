import { combineReducers } from 'redux'
import amountReducer from './amount'

const drippApp = combineReducers({amount: amountReducer})

export default drippApp