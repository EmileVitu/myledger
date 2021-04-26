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
    closeChartPieDisplay,
    openChartStreamDisplay,
    closeChartStreamDisplay } from '../actions/displayActions'
// Components
import ExpenseModal from './ExpenseModal'
import WelcomeDisplay from './display/WelcomeDisplay'
import TableDisplay from './display/TableDisplay'
import ChartBarsDisplay from './display/ChartBarsDisplay'
import ChartPieDisplay from './display/ChartPieDisplay'
import ChartStreamDisplay from './display/ChartStreamDisplay'
import LoadingDisplay from './display/LoadingDisplay'
// Styling
import { 
    Container, 
    Button, 
    ButtonGroup } from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined'
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined'




class Expenses extends Component {

    static propTypes = {
        isExpenseModalOpen: PropTypes.bool,
        isTableDisplayOpen: PropTypes.bool,
        isChartBarsDisplayOpen: PropTypes.bool,
        isChartPieDisplayOpen: PropTypes.bool,
        isChartStreamDisplayOpen: PropTypes.bool,
        loading: PropTypes.bool
    }

    toggleExpenseModal = () => {
        this.props.openExpenseModal()
    }

    toggleTableDisplay = () => {
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        if(this.props.isChartPieDisplayOpen) {this.props.closeChartPieDisplay()}
        if(this.props.isChartStreamDisplayOpen) {this.props.closeChartStreamDisplay()}
        !this.props.isTableDisplayOpen ? this.props.openTableDisplay() : this.props.closeTableDisplay()
    }

    toggleChartBarsDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        if(this.props.isChartPieDisplayOpen) {this.props.closeChartPieDisplay()}
        if(this.props.isChartStreamDisplayOpen) {this.props.closeChartStreamDisplay()}
        !this.props.isChartBarsDisplayOpen ? this.props.openChartBarsDisplay() : this.props.closeChartBarsDisplay()
    }

    toggleChartPieDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        if(this.props.isChartStreamDisplayOpen) {this.props.closeChartStreamDisplay()}
        !this.props.isChartPieDisplayOpen ? this.props.openChartPieDisplay() : this.props.closeChartPieDisplay()
    }

    toggleChartStreamDisplay = () => {
        if(this.props.isTableDisplayOpen) {this.props.closeTableDisplay()}
        if(this.props.isChartBarsDisplayOpen) {this.props.closeChartBarsDisplay()}
        if(this.props.isChartPieDisplayOpen) {this.props.closeChartPieDisplay()}
        !this.props.isChartStreamDisplayOpen ? this.props.openChartStreamDisplay() : this.props.closeChartStreamDisplay()
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
                    <Button
                        onClick={this.toggleChartStreamDisplay}
                        ><TimelineOutlinedIcon /></Button>
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
                { this.props.isChartStreamDisplayOpen ? <ChartStreamDisplay /> : null }
                { this.props.loading ? <LoadingDisplay /> : null }

                { !this.props.isTableDisplayOpen && 
                    !this.props.isChartBarsDisplayOpen &&
                    !this.props.isChartPieDisplayOpen &&
                    !this.props.isChartStreamDisplayOpen &&
                    !this.props.loading ? <WelcomeDisplay /> : null }

            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    isExpenseModalOpen: state.modal.isExpenseModalOpen,
    isTableDisplayOpen: state.display.isTableDisplayOpen,
    isChartBarsDisplayOpen: state.display.isChartBarsDisplayOpen,
    isChartPieDisplayOpen: state.display.isChartPieDisplayOpen,
    isChartStreamDisplayOpen: state.display.isChartStreamDisplayOpen,
    loading: state.expense.loading
})

export default connect(mapStateToProps, { 
    openExpenseModal, 
    closeExpenseModal,
    openTableDisplay,
    closeTableDisplay,
    openChartBarsDisplay,
    closeChartBarsDisplay,
    openChartPieDisplay,
    closeChartPieDisplay,
    openChartStreamDisplay,
    closeChartStreamDisplay })(Expenses)