import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY,
    OPEN_CHARTBARS_DISPLAY,
    CLOSE_CHARTBARS_DISPLAY } from '../actions/types'

const initialState = {
    isTableDisplayOpen: false,
    isChartBarsDisplayOpen: false
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
        case OPEN_CHARTBARS_DISPLAY:
            return {
                ...state,
                isChartBarsDisplayOpen: true
            }
        case CLOSE_CHARTBARS_DISPLAY:
            return {
                ...state,
                isChartBarsDisplayOpen: false
            }
        default:
            return state
    }
}