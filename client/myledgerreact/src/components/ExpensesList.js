import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getExpenses, deleteExpense } from '../actions/expenseActions'
import PropTypes from 'prop-types'

class ExpensesList extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired, 
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    onDeleteClick = (id) => {
        this.props.deleteExpense(id)
    }

    render() {
        const { expenses } = this.props.expense
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className='expenses-list'>
                        {expenses.map(({ id, title, user, amount, category, dateExpense, comment }) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger' 
                                        size='sm' 
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >&times;</Button>
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
    expense: state.expense
})


export default connect(mapStateToProps, { getExpenses, deleteExpense })(ExpensesList)