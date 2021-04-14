import { 
    OPEN_TABLE_DISPLAY,
    CLOSE_TABLE_DISPLAY } from './types'

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