// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar'
// Functions
import { getExpenses } from '../../actions/expenseActions'



export class ChartBarsDisplay extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired,
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    render() {

        const { expenses } = this.props.expense

        // const expenseData = expenses.map(({ _id, title, user, amount, category, dateExpense, comment, dateCreated }) => [
        //     {
        //         "Month": "dddde"
        //     }
        // ])

        // Will need to : 
        // --> First, sort by date
        // --> Then, group by date (second sorting between two dates)
        // --> Then, create new objects with the sum of the amounts of the objects after these two sorting, and their categories

        const data = [
            {
                "Month": "AD",
                "Needs": 99,
                "hot dogColor": "hsl(22, 70%, 50%)",
                "Wants": 96,
                "burgerColor": "hsl(335, 70%, 50%)",
                "Culture": 64,
                "sandwichColor": "hsl(143, 70%, 50%)",
                "Unexpected": 72,
                "kebabColor": "hsl(27, 70%, 50%)"
              },
              {
                "Month": "AE",
                "Needs": 100,
                "hot dogColor": "hsl(157, 70%, 50%)",
                "Wants": 176,
                "burgerColor": "hsl(199, 70%, 50%)",
                "Culture": 140,
                "sandwichColor": "hsl(147, 70%, 50%)",
                "Unexpected": 120,
                "kebabColor": "hsl(100, 70%, 50%)"
              }
        ]

        return (
            <div style={{height:700}}>
                <ResponsiveBar
                    data={ data }
                    keys={[ 'Unexpected', 'Culture', 'Wants', 'Needs' ]}
                    indexBy="Month"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Needs'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'Culture'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Month',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Amount',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps, { getExpenses })(ChartBarsDisplay)
