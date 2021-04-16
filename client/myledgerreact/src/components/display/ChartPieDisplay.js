// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses } from '../../actions/expenseActions'



export class ChartPieDisplay extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired,
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    render() {
        return (
            <div>
                <h1>Pie Display!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps, { getExpenses })(ChartPieDisplay)