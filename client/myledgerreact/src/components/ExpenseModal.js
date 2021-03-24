import React, { Component } from 'react'
import {
    Button, 
    Modal, 
    ModalHeader,
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenseActions'
import { v1 as uuid } from 'uuid'


class ExpenseModal extends Component {
    state = {
        modal: false, 
        title: '',
        user: '',
        amount: '',
        dateExpense: '',
        category: '',
        comment: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: uuid(),
            title: this.state.title,
            user: this.state.user,
            amount: this.state.amount,
            dateExpense: this.state.dateExpense,
            category: this.state.category,
            comment: this.state.comment
        }
        // Add expense via addExpense action
        this.props.addExpense(newExpense)
        // Close the modal
        this.toggle()
    }

    render() {
        return(
            <div>
                <Button
                    color='dark'
                    style= {{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Expense</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to expense list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>

                                <Label for='expense'>Title of the expense</Label>
                                <Input
                                    type='text' 
                                    name='title' 
                                    id='expense' 
                                    placeholder='Add an expense' 
                                    onChange={this.onChange} 
                                />

                                <Label for='expense'>User</Label>
                                <Input
                                    type='text' 
                                    name='user' 
                                    id='expense' 
                                    placeholder='Add the user' 
                                    onChange={this.onChange} 
                                />

                                <Label for='expense'>Amount</Label>
                                <Input
                                    type='text'
                                    name='amount' 
                                    id='expense' 
                                    placeholder='Add the amount' 
                                    onChange={this.onChange} 
                                />

                                <Label for='expense'>Date of the expense</Label>
                                <Input
                                    type='text' 
                                    name='dateExpense' 
                                    id='expense' 
                                    placeholder='Add a date for your expense' 
                                    onChange={this.onChange} 
                                />

                                <Label for='expense'>Category</Label>
                                <Input
                                    type='text' 
                                    name='category' 
                                    id='expense' 
                                    placeholder='Add a category' 
                                    onChange={this.onChange} 
                                />                              
                                <Label for='expense'>Comment</Label>
                                <Input
                                    type='text' 
                                    name='comment' 
                                    id='expense' 
                                    placeholder='Add a comment' 
                                    onChange={this.onChange} 
                                />

                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Expense</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps, { addExpense })(ExpenseModal)