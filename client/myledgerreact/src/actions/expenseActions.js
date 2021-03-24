import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE, EXPENSES_LOADING } from './types'
import axios from 'axios'


export const getExpenses = () => dispatch => {
    dispatch(setExpensesLoading())
    axios
        .get('/api/expenses')
        .then(res =>
            dispatch({
                type: GET_EXPENSES,
                payload: res.data
            })
        )
}

export const addExpense = (expense) => dispatch => {
    axios
        .post('/api/expenses', expense)
        .then(res =>
            dispatch({
                type: ADD_EXPENSE, 
                payload: res.data
            })
        )
}

export const deleteExpense = (_id) => dispatch => {
    axios
        .delete(`/api/expenses/${_id}`)
        .then(res => 
            dispatch({
                type: DELETE_EXPENSE, 
                payload: _id
            })
        )
}

export const setExpensesLoading = () => {
    return {
        type: EXPENSES_LOADING
    }
}