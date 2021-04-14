// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { openExpenseModal, closeExpenseModal } from '../actions/modalActions'
import { openTableDisplay, closeTableDisplay } from '../actions/displayActions'
// Components
import ExpenseModal from './ExpenseModal'
import TableDisplay from './table/TableDisplay'
// Styling
import { 
    Container, 
    Button, 
    ButtonGroup } from '@material-ui/core'



class Expenses extends Component {

    static propTypes = {
        isExpenseModalOpen: PropTypes.bool,
        isTableDisplayOpen: PropTypes.bool
    }

    toggleExpenseModal = () => {
        this.props.openExpenseModal()
    }

    toggleTableDisplay = () => {
        !this.props.isTableDisplayOpen ? this.props.openTableDisplay() : this.props.closeTableDisplay()
    }

    render() {
        return(
            <Container>
                    
                <ButtonGroup color='primary' variant='contained'>
                    <Button
                        onClick={this.toggleTableDisplay}
                        >Table</Button>
                    <Button>Graph</Button>
                    <Button>Pie Chart</Button>
                    <Button>Another way to display</Button>
                    <Button
                        onClick={this.toggleExpenseModal}
                        >Add expense</Button>
                </ButtonGroup>

                <ExpenseModal />

                <Container>
                    { this.props.isTableDisplayOpen ? <TableDisplay /> : null }
                </Container>

                

            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    isExpenseModalOpen: state.modal.isExpenseModalOpen,
    isTableDisplayOpen: state.display.isTableDisplayOpen
})

export default connect(mapStateToProps, { 
    openExpenseModal, 
    closeExpenseModal,
    openTableDisplay,
    closeTableDisplay })(Expenses)