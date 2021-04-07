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
import { updateExpense } from '../actions/expenseActions'
import PropTypes from 'prop-types'


class UpdateModal extends Component {
    state = {
        modal: false,
        title: '',
        user: '',
        amount: '',
        dateExpense: '',
        category: '',
        comment: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        expense: PropTypes.object.isRequired
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
        const updatedExpense = {
            _id: this.props.parentId,
            title: this.state.title,
            user: this.state.user,
            amount: this.state.amount,
            dateExpense: this.state.dateExpense,
            category: this.state.category,
            comment: this.state.comment
        }
        this.props.updateExpense(updatedExpense)
        this.toggle()
    }

    render() {
        return(
            <>
                { this.props.isAuthenticated ?  
                    <Button
                        color='info'
                        size='sm'
                        className='edit-btn'
                        onClick={this.toggle}
                    >&raquo;</Button> : null }

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Update this expense</ModalHeader>
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
                                >Update Expense</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { updateExpense })(UpdateModal)