import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY } from '../actions/types'

const initialState = {
    isTableDisplayOpen: false
}

export const displayReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_TABLE_DISPLAY:
            return {
                ...state,
                isTableDisplayOpen: true
            }
        case CLOSE_TABLE_DISPLAY:
            return {
                ...state,
                isTableDisplayOpen: false
            }
        default:
            return state
    }
}