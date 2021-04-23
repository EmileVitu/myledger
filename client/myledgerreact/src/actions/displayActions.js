import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY, 
    OPEN_CHARTBARS_DISPLAY,
    CLOSE_CHARTBARS_DISPLAY, 
    OPEN_CHARTPIE_DISPLAY,
    CLOSE_CHARTPIE_DISPLAY, 
    OPEN_CHARTSTREAM_DISPLAY,
    CLOSE_CHARTSTREAM_DISPLAY } from './types'

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

// Chart-Pie display actions
export const openChartPieDisplay = () => {
    return {
        type: OPEN_CHARTPIE_DISPLAY
    }
}
export const closeChartPieDisplay = () => {
    return {
        type: CLOSE_CHARTPIE_DISPLAY
    }
}

// Chart-Stream display actions
export const openChartStreamDisplay = () => {
    return {
        type: OPEN_CHARTSTREAM_DISPLAY
    }
}
export const closeChartStreamDisplay = () => {
    return {
        type: CLOSE_CHARTSTREAM_DISPLAY
    }
}