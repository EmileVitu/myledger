import { v1 as uuid } from 'uuid'
import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE } from '../actions/types'


const initialState = {
    expenses: [
        { 
            id: uuid(), 
            title: 'Groceries'
            // user: 'Emile', 
            // amount: 15.57, 
            // dateExpense: 15486, 
            // category: 'important', 
            // comment: 'Groceries for first week of january' 
        },
        { 
            id: uuid(), 
            title: 'Electricity' 
            // user: 'Emile', 
            // amount: 86.25, 
            // dateExpense: 15555, 
            // category: 'important', 
            // comment: 'Electricity for january'
         },
        { 
            id: uuid(), 
            title: 'Rent'
            // user: 'Emile', 
            // amount: 850, 
            // dateExpense: 15555, 
            // category: 'important', 
            // comment: 'Rent for January' 
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_EXPENSES:
            return {
                ...state
            }
        case ADD_EXPENSE: 
            return {
                ...state, 
                expenses: [action.payload, ...state.expenses]
            }
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        default:
            return state
    }
}