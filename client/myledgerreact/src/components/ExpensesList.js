import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getExpenses, deleteExpense } from '../actions/expenseActions'
import PropTypes from 'prop-types'

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
                    <TransitionGroup className='expenses-list'>
                        {expenses.map(({ _id, title, user, amount, category, dateExpense, comment }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    { this.props.isAuthenticated ? 
                                        <Button
                                            className='remove-btn'
                                            color='danger' 
                                            size='sm' 
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >&times;</Button> : null }

                                    {title} - {user} - {amount} - {dateExpense} - {category} - {comment}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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