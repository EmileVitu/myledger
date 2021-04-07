import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE, EXPENSES_LOADING, UPDATE_EXPENSE } from '../actions/types'


const initialState = {
    expenses: []
}

export default function expenseReducer(state = initialState, action) {
    switch(action.type) {
        case GET_EXPENSES:
            return {
                ...state,
                expenses: action.payload,
                loading: false
            }
        case ADD_EXPENSE: 
            return {
                ...state, 
                expenses: [action.payload, ...state.expenses]
            }
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense._id !== action.payload)
            }
        case EXPENSES_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(expense => 
                    expense._id === action.payload._id 
                    ? action.payload.expense 
                    : expense)
            }
        default:
            return state
    }
}