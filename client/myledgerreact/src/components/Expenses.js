// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { openExpenseModal, closeExpenseModal } from '../actions/modalActions'
import { 
    openTableDisplay, 
    closeTableDisplay,
    openChartBarsDisplay,
    closeChartBarsDisplay } from '../actions/displayActions'
// Components
import ExpenseModal from './ExpenseModal'
import WelcomeDisplay from './display/WelcomeDisplay'
import TableDisplay from './display/TableDisplay'
import ChartBarsDisplay from './display/ChartBarsDisplay'
// Styling
import { 
    Container, 
    Button, 
    ButtonGroup } from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'



class Expenses extends Component {

    static propTypes = {
        isExpenseModalOpen: PropTypes.bool,
        isTableDisplayOpen: PropTypes.bool,
        isChartBarsDisplayOpen: PropTypes.bool
    }

    toggleExpenseModal = () => {
        this.props.openExpenseModal()
    }

    toggleTableDisplay = () => {
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        !this.props.isTableDisplayOpen ? this.props.openTableDisplay() : this.props.closeTableDisplay()
    }

    toggleChartBarsDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        !this.props.isChartBarsDisplayOpen ? this.props.openChartBarsDisplay() : this.props.closeChartBarsDisplay()
    }

    render() {
        return(
            <Container>
                    
                <ButtonGroup color='primary' variant='contained'>
                    <Button
                        onClick={this.toggleTableDisplay}
                        >Table (icon)</Button>
                    <Button
                        onClick={this.toggleChartBarsDisplay}
                        >Bars (icon)</Button>
                    <Button>(Pie Chart)</Button>
                    <Button>(Another way to display)</Button>
                </ButtonGroup>

                <Button
                    onClick={this.toggleExpenseModal}
                    color='primary'
                    variant='contained'
                    className='float-right'
                    startIcon={<PlaylistAddIcon />}
                    >
                    Add expense
                </Button>

                <ExpenseModal />

                { this.props.isTableDisplayOpen ? <TableDisplay /> : null }
                { this.props.isChartBarsDisplayOpen ? <ChartBarsDisplay /> : null }
                { !this.props.isTableDisplayOpen && !this.props.isChartBarsDisplayOpen ? <WelcomeDisplay /> : null }

            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    isExpenseModalOpen: state.modal.isExpenseModalOpen,
    isTableDisplayOpen: state.display.isTableDisplayOpen,
    isChartBarsDisplayOpen: state.display.isChartBarsDisplayOpen
})

export default connect(mapStateToProps, { 
    openExpenseModal, 
    closeExpenseModal,
    openTableDisplay,
    closeTableDisplay,
    openChartBarsDisplay,
    closeChartBarsDisplay })(Expenses)