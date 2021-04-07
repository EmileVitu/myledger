import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getExpenses, deleteExpense } from '../actions/expenseActions'
import PropTypes from 'prop-types'
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
                <ListGroup>
                    {expenses.map(({ _id, title, user, amount, category, dateExpense, comment, dateCreated }) => (
                        <ListGroupItem key={_id}>
                            { this.props.isAuthenticated ? 
                                <>
                                    <Button
                                        className='remove-btn'
                                        color='danger' 
                                        size='sm' 
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    <UpdateModal parentId={_id} />
                                </> 
                                : null }
                            {_id} - {dateCreated} - {title} - {user} - {amount} - {dateExpense} - {category} - {comment}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )
    }

}


const mapStateToProps = (state) => ({
    expense: state.expense,
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { getExpenses, deleteExpense })(ExpensesList)