import { combineReducers } from 'redux'
import amountReducer from './amount'

const drippApp = combineReducers({amountReducer})

export default drippApp