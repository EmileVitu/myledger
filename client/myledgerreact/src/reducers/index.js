import { combineReducers } from 'redux'
import { expenseReducer } from './expenseReducer'
import { authReducer } from './authReducer'
import { errorReducer } from './errorReducer'
import { modalReducer } from './modalReducer'

export default combineReducers({
    expense: expenseReducer,
    error: errorReducer, 
    auth: authReducer,
    modal: modalReducer
})