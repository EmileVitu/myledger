import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY,
    OPEN_CHARTBARS_DISPLAY,
    CLOSE_CHARTBARS_DISPLAY, 
    OPEN_CHARTPIE_DISPLAY,
    CLOSE_CHARTPIE_DISPLAY,
    OPEN_CHARTSTREAM_DISPLAY,
    CLOSE_CHARTSTREAM_DISPLAY } from '../actions/types'

const initialState = {
    isTableDisplayOpen: false,
    isChartBarsDisplayOpen: false,
    isChartPieDisplayOpen: false,
    isChartStreamDisplayOpen: false
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
        case OPEN_CHARTPIE_DISPLAY:
            return {
                ...state,
                isChartPieDisplayOpen: true
            }
        case CLOSE_CHARTPIE_DISPLAY:
            return {
                ...state,
                isChartPieDisplayOpen: false
            }
        case OPEN_CHARTSTREAM_DISPLAY:
            return {
                ...state,
                isChartStreamDisplayOpen: true
            }
        case CLOSE_CHARTSTREAM_DISPLAY:
            return {
                ...state,
                isChartStreamDisplayOpen: false
            }
        default:
            return state
    }
}