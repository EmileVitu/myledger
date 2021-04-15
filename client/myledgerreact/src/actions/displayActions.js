import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY, 
    OPEN_CHARTBARS_DISPLAY,
    CLOSE_CHARTBARS_DISPLAY } from './types'

// Table display actions
export const openTableDisplay = () => {
    return {
        type: OPEN_TABLE_DISPLAY
    }
}
export const closeTableDisplay = () => {
    return {
        type: CLOSE_TABLE_DISPLAY
    }
}
// Chart-Bars display actions
export const openChartBarsDisplay = () => {
    return {
        type: OPEN_CHARTBARS_DISPLAY
    }
}
export const closeChartBarsDisplay = () => {
    return {
        type: CLOSE_CHARTBARS_DISPLAY
    }
}