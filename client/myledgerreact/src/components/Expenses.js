// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses, deleteExpense } from '../actions/expenseActions'
// Styling
import { 
    Container, 
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
// Components
import UpdateModal from './UpdateModal'
import ExpenseModal from './ExpenseModal'


class Expenses extends Component {

    // state= {
    //     openUpdate: false,
    //     openExpense: false
    // }

    static propTypes = {
        getExpenses: PropTypes.func.isRequired, 
        expense: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    onDeleteClick = (_id) => {
        this.props.deleteExpense(_id)
    }

    toggleUpdateModal = () => {
        // this.setState({
        //     openUpdate: !this.state.openUpdate
        // })
    }

    render() {
        const { expenses } = this.props.expense

        // const options = { weekdat: 'long', year: 'numeric', month: 'long', day:'numeric' }
        // toLocaleDateString --> for dateExpense
        // toLocaleString --> for dateCreated

        return(
            <Container>
            <ButtonGroup color='primary' variant='contained'>
                <ExpenseModal />
                <Button>Graph</Button>
                <Button>Pie Chart</Button>
                <Button>Another way to display</Button>
            </ButtonGroup>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Expense</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Comment</TableCell>
                                <TableCell>Added on</TableCell>
                                <TableCell>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {expenses.map(({ _id, title, user, amount, category, dateExpense, comment, dateCreated }) => (
                                <TableRow key={_id}>
                                    <TableCell>{_id}</TableCell>
                                    <TableCell>{title}</TableCell>
                                    <TableCell>{user}</TableCell>
                                    <TableCell>{amount}</TableCell>
                                    <TableCell>{category}</TableCell>
                                    <TableCell>{dateExpense}</TableCell>
                                    <TableCell>{comment}</TableCell>
                                    <TableCell>{dateCreated}</TableCell>
                                    <TableCell>
                                        <ButtonGroup>
                                            <Button 
                                                variant='contained' 
                                                color='secondary'
                                                size='small'
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                ><DeleteIcon /></Button>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                size='small'
                                                onClick={this.toggleUpdateModal}
                                            >
                                                <EditIcon />
                                                <UpdateModal parentId={_id}/>
                                            </Button>
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
            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    expense: state.expense,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getExpenses, deleteExpense })(Expenses)