// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses, deleteExpense } from '../actions/expenseActions'
// Styling
import { Container, Button, List, ListItem } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'



import UpdateModal from './UpdateModal'

class ExpensesList extends Component {

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

    render() {
        const { expenses } = this.props.expense

        return(
            <Container>
                <List>
                    {expenses.map(({ _id, title, user, amount, category, dateExpense, comment, dateCreated }) => (
                        <ListItem key={_id}>
                            { this.props.isAuthenticated ? 
                                <>
                                    <Button 
                                        variant='contained' 
                                        color='secondary'
                                        size='small'
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        ><DeleteIcon />Delete</Button>
                                    <UpdateModal parentId={_id} />
                                </> 
                                : null }
                            {_id} - {dateCreated} - {title} - {user} - {amount} - {dateExpense} - {category} - {comment}
                        </ListItem>
                    ))}
                </List>
            </Container>
        )
    }

}


const mapStateToProps = (state) => ({
    expense: state.expense,
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { getExpenses, deleteExpense })(ExpensesList)