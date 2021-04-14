import { 
    OPEN_UPDATE_MODAL,
    CLOSE_UPDATE_MODAL,
    OPEN_EXPENSE_MODAL,
    CLOSE_EXPENSE_MODAL
 } from '../actions/types'

const initialState = {
    isUpdateModalOpen: false,
    isExpenseModalOpen: false
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_UPDATE_MODAL:
            return {
                ...state,
                isUpdateModalOpen: true
            }
        case CLOSE_UPDATE_MODAL:
            return {
                ...state,
                isUpdateModalOpen: false
            }
        case OPEN_EXPENSE_MODAL:
            return {
                ...state,
                isExpenseModalOpen: true
            }
        case CLOSE_EXPENSE_MODAL:
            return {
                ...state,
                isExpenseModalOpen: false
            }
        default:
            return state
    }
}