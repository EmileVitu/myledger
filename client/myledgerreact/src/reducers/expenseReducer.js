import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE, EXPENSES_LOADING } from '../actions/types'


const initialState = {
    expenses: []
}

export default function(state = initialState, action) {
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
        default:
            return state
    }
}