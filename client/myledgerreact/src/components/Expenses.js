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
    closeChartBarsDisplay,
    openChartPieDisplay,
    closeChartPieDisplay } from '../actions/displayActions'
// Components
import ExpenseModal from './ExpenseModal'
import WelcomeDisplay from './display/WelcomeDisplay'
import TableDisplay from './display/TableDisplay'
import ChartBarsDisplay from './display/ChartBarsDisplay'
import ChartPieDisplay from './display/ChartPieDisplay'
// Styling
import { 
    Container, 
    Button, 
    ButtonGroup } from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined'

class Expenses extends Component {

    static propTypes = {
        isExpenseModalOpen: PropTypes.bool,
        isTableDisplayOpen: PropTypes.bool,
        isChartBarsDisplayOpen: PropTypes.bool,
        isChartPieDisplayOpen: PropTypes.bool
    }

    toggleExpenseModal = () => {
        this.props.openExpenseModal()
    }

    toggleTableDisplay = () => {
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        if(this.props.isChartPieDisplayOpen) {this.props.closeChartPieDisplay()}
        !this.props.isTableDisplayOpen ? this.props.openTableDisplay() : this.props.closeTableDisplay()
    }

    toggleChartBarsDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        if(this.props.isChartPieDisplayOpen) {this.props.closeChartPieDisplay()}
        !this.props.isChartBarsDisplayOpen ? this.props.openChartBarsDisplay() : this.props.closeChartBarsDisplay()
    }

    toggleChartPieDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        !this.props.isChartPieDisplayOpen ? this.props.openChartPieDisplay() : this.props.closeChartPieDisplay()
    }

    render() {
        return(
            <Container>
                    
                <ButtonGroup color='primary' variant='contained'>
                    <Button
                        onClick={this.toggleTableDisplay}
                        ><TableChartOutlinedIcon /></Button>
                    <Button
                        onClick={this.toggleChartBarsDisplay}
                        ><AssessmentOutlinedIcon /></Button>
                    <Button
                        onClick={this.toggleChartPieDisplay}
                        ><PieChartOutlinedIcon /></Button>
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
                { this.props.isChartPieDisplayOpen ? <ChartPieDisplay /> : null }
                { !this.props.isTableDisplayOpen && 
                    !this.props.isChartBarsDisplayOpen &&
                    !this.props.isChartPieDisplayOpen ? <WelcomeDisplay /> : null }

            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    isExpenseModalOpen: state.modal.isExpenseModalOpen,
    isTableDisplayOpen: state.display.isTableDisplayOpen,
    isChartBarsDisplayOpen: state.display.isChartBarsDisplayOpen,
    isChartPieDisplayOpen: state.display.isChartPieDisplayOpen
})

export default connect(mapStateToProps, { 
    openExpenseModal, 
    closeExpenseModal,
    openTableDisplay,
    closeTableDisplay,
    openChartBarsDisplay,
    closeChartBarsDisplay,
    openChartPieDisplay,
    closeChartPieDisplay })(Expenses)