import { 
    OPEN_UPDATE_MODAL,
    CLOSE_UPDATE_MODAL,
    OPEN_EXPENSE_MODAL,
    CLOSE_EXPENSE_MODAL } from './types'

 // Update modal actions
 export const openUpdateModal = () => {
     return {
         type: OPEN_UPDATE_MODAL
     }
 }
 export const closeUpdateModal = () => {
     return {
         type: CLOSE_UPDATE_MODAL
     }
 }

 // Expense modal actions
 export const openExpenseModal = () => {
     return {
         type: OPEN_EXPENSE_MODAL
     }
 }
 export const closeExpenseModal = () => {
     return {
         type: CLOSE_EXPENSE_MODAL
     }
 }