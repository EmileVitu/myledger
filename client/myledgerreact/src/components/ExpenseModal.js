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
        title: ''
        // user: '',
        // amount: '', 
        // dateExpense: '',
        // category: '',
        // comment: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.title]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: uuid(),
            title: this.state.title
        }

        this.props.addExpense(newExpense)

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
                                <Label for='expense'>Expense</Label>
                                <Input
                                    type='text' 
                                    name='title' 
                                    id='expense' 
                                    placeholder='Add an expense' 
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