import axios from 'axios'
import { 
    GET_EXPENSES, 
    ADD_EXPENSE, 
    DELETE_EXPENSE, 
    EXPENSES_LOADING, 
    UPDATE_EXPENSE } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'


export const getExpenses = () => dispatch => {
    dispatch(setExpensesLoading())
    axios
        .get('/api/expenses')
        .then(res =>
            dispatch({
                type: GET_EXPENSES,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addExpense = (expense) => (dispatch, getState) => {
    axios
        .post('/api/expenses', expense, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_EXPENSE, 
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateExpense = (expense, _id) => (dispatch, getState) => {
    axios
        .post(`/api/expenses/${expense._id}`, expense, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: UPDATE_EXPENSE, 
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    dispatch(getExpenses())
}

export const deleteExpense = (_id) => (dispatch, getState) => {
    axios
        .delete(`/api/expenses/${_id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_EXPENSE, 
                payload: _id
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const setExpensesLoading = () => {
    return {
        type: EXPENSES_LOADING
    }
}