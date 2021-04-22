// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses, deleteExpense } from '../../actions/expenseActions'
import { openUpdateModal, closeUpdateModal } from '../../actions/modalActions'
// Components
import UpdateModal from '../UpdateModal'
// Styling
import { 
    Button, 
    ButtonGroup,
    Table,
    TableContainer, 
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    TableFooter} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'



export class TableDisplay extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired, 
        expense: PropTypes.object.isRequired,
        isUpdateModalOpen: PropTypes.bool
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    onDeleteClick = (_id) => {
        this.props.deleteExpense(_id)
    }

    toggleUpdateModal = () => {
        this.props.openUpdateModal()
    }

    render() {

        // Pulling out the expenses
        const { expenses } = this.props.expense

        // Remapping the array with a correct date format
        const refilteredExpenses = expenses.map(({ _id, title, user, amount, category, dateExpense, comment }) => {
            const dateObject = new Date(dateExpense)
            const newDate = dateObject.toLocaleString('en-us', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
            return {
                _id,
                title,
                user,
                amount,
                category,
                dateExpense: newDate,
                comment
            }
        })

        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Expense</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {refilteredExpenses.map(({ _id, title, user, amount, category, dateExpense, comment }) => (
                            <TableRow key={_id}>
                                <TableCell>{title}</TableCell>
                                <TableCell>{user}</TableCell>
                                <TableCell>{amount}</TableCell>
                                <TableCell>{category}</TableCell>
                                <TableCell>{dateExpense}</TableCell>
                                <TableCell>{comment}</TableCell>
                                <TableCell>
                                    <ButtonGroup>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            size='small'
                                            onClick={this.toggleUpdateModal}
                                        >
                                            <EditIcon />
                                            <UpdateModal parentId={_id}/>
                                        </Button>
                                        <Button 
                                            variant='contained' 
                                            color='primary'
                                            size='small'
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            ><DeleteIcon /></Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Hello Footer!</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense,
    isUpdateModalOpen: state.modal.isUpdateModalOpen,
    isTableDisplayOpen: state.display.isTableDisplayOpen
})

export default connect(mapStateToProps, { 
    getExpenses,
    deleteExpense,
    openUpdateModal,
    closeUpdateModal })(TableDisplay)
