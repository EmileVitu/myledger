import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE } from './types'


export const getExpenses = () => {
    return {
        type: GET_EXPENSES
    }
}

export const addExpense = (expense) => {
    return {
        type: ADD_EXPENSE, 
        payload: expense
    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE, 
        payload: id
    }
}