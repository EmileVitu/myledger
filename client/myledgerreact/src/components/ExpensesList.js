import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v1 as uuid } from 'uuid'


class ExpensesList extends Component {
    state = {
        expenses: [
            { 
                id: uuid(), 
                title: 'Groceries', 
                user: 'Emile', 
                amount: 15.57, 
                dateExpense: 15486, 
                category: 'important', 
                comment: 'Groceries for first week of january' },
            { 
                id: uuid(), 
                title: 'Electricity', 
                user: 'Emile', 
                amount: 86.25, 
                dateExpense: 15555, 
                category: 'important', 
                comment: 'Electricity for january' },
            { 
                id: uuid(), 
                title: 'Rent', 
                user: 'Emile', 
                amount: 850, 
                dateExpense: 15555, 
                category: 'important', 
                comment: 'Rent for January' }
        ]
    }

    render() {
        const { expenses } = this.state
        return(
            <Container>
                <Button 
                    color= 'dark' 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => {
                        const title = prompt('Enter Item')
                        if(title) {
                            this.setState(state => ({
                                expenses: [...state.expenses, { id: uuid(), title }]
                            }))
                        }
                    }}>
                        Add Expense
                </Button>
                <ListGroup>
                    <TransitionGroup className="expenses-list">
                        {expenses.map(({ id, title }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
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

export default ExpensesList