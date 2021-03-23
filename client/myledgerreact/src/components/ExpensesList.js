import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v1 as uuid } from 'uuid'
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
                {/* <Button 
                    color= 'dark' 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => {
                        const title = prompt('Enter Expense')
                        if(title) {
                            this.setState(state => ({
                                expenses: [...state.expenses, { id: uuid(), title }]
                            }))
                        }
                    }}>Add Expense</Button> */}
                <ListGroup>
                    <TransitionGroup className='expenses-list'>
                        {expenses.map(({ id, title }) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger' 
                                        size='sm' 
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >&times;</Button>
                                    {title}
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