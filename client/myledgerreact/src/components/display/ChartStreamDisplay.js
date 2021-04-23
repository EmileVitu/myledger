// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses } from '../../actions/expenseActions'
// Styling
import { ResponsiveStream } from '@nivo/stream'



export class ChartStreamDisplay extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired,
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    render() {

        // Pulling out the data from the redux state
        const { expenses } = this.props.expense

        // Map array by dates with category and amount from the expenses array
        const filterOne = expenses.map(({ dateExpense, amount, category }) => {
            const dateObject = new Date(dateExpense)
            const newDate = dateObject.toLocaleString('en-us', { month: 'long', year: 'numeric' })
            return {
                date: newDate,
                amount,
                category
            }
        })

        // Sorts by date in an array, containing expenses, an array of expenses at this date
        const filterTwo = filterOne.reduce((n, d) => {
            const found = n.find(a => a.date === d.date)
            const expense = {date: d.date, amount: d.amount, category: d.category }
            if (found) {
                found.expenses.push(expense)
            } else {
                n.push({
                    date: d.date,
                    expenses: [{ 
                        amount: d.amount,
                        category: d.category }],
                    needsTotal: 0,
                    wantsTotal: 0,
                    cultureTotal: 0,
                    unexpectedTotal: 0
                    })
            }
            return n
        }, [])
        
        // Filter each expense of each date and sums them by category
        const filterThree = filterTwo.map(n => {
            const categoryFilterNeeds = n.expenses.filter(expense => expense.category === 'Needs')
            n.needsTotal = categoryFilterNeeds.reduce((n, { amount }) => n + amount, 0)
            const categoryFilterWants = n.expenses.filter(expense => expense.category === 'Wants')
            n.wantsTotal = categoryFilterWants.reduce((n, { amount }) => n + amount, 0)
            const categoryFilterCulture = n.expenses.filter(expense => expense.category === 'Culture')
            n.cultureTotal = categoryFilterCulture.reduce((n, { amount }) => n + amount, 0)
            const categoryFilterUnexpected = n.expenses.filter(expense => expense.category === 'Unexpected')
            n.cultureUnexpected = categoryFilterUnexpected.reduce((n, { amount }) => n + amount, 0)
            return n
        })

        // Finally we can map our array in the data array for the barChart
        const data = filterThree.map(n => {
            return {
                "Needs": n.needsTotal,
                "Wants": n.wantsTotal,
                "Culture": n.cultureTotal,
                "Unexpected": n.unexpectedTotal
              }
        })

        return (
            <div style={{height:500}}>
                    <ResponsiveStream
                        data={data}
                        keys={[ 'Needs', 'Wants', 'Culture', 'Unexpected' ]}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: 36
                        }}
                        axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
                        offsetType="silhouette"
                        colors={{ scheme: 'nivo' }}
                        fillOpacity={0.85}
                        borderColor={{ theme: 'background' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#2c998f',
                                size: 4,
                                padding: 2,
                                stagger: true
                            },
                            {
                                id: 'squares',
                                type: 'patternSquares',
                                background: 'inherit',
                                color: '#e4c912',
                                size: 6,
                                padding: 2,
                                stagger: true
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
                                id: 'squares'
                            }
                        ]}
                        dotSize={8}
                        dotColor={{ from: 'color' }}
                        dotBorderWidth={2}
                        dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                translateX: 100,
                                itemWidth: 80,
                                itemHeight: 20,
                                itemTextColor: '#999999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps, { getExpenses })(ChartStreamDisplay)
