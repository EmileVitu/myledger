// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses } from '../../actions/expenseActions'
// Styling
import { ResponsiveBar } from '@nivo/bar'



export class ChartBarsDisplay extends Component {

    static propTypes = {
        getExpenses: PropTypes.func.isRequired,
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    render() {

        // Pulling out the data
        const { expenses } = this.props.expense

        // Map array by dates with category and amount from the expenses array
        const filterTwo = expenses.map(({ dateExpense, amount, category }) => {
            const dateObject = new Date(dateExpense)
            const newDate = dateObject.toLocaleString('en-us', { month: 'long', year: 'numeric' })
            return {
                date: newDate,
                amount,
                category
            }
        })
        console.log(filterTwo)
        console.log(filterTwo[0])


        // Sorts by date in an array, containing expenses, an array of expenses at this date
        const filterFour = filterTwo.reduce((n, d) => {
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
        console.log(filterFour)
        console.log(filterFour[0])
        
        // Filter each expense of each date and sums them by category
        const filterFive = filterFour.map(n => {
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
        console.log(filterFive)
        console.log(filterFive[0])


        const data2 = filterFive.map(n => {
            return {
                "Month": n.date,
                "Needs": n.needsTotal,
                "hot dogColor": "hsl(22, 70%, 50%)",
                "Wants": n.wantsTotal,
                "burgerColor": "hsl(335, 70%, 50%)",
                "Culture": n.cultureTotal,
                "sandwichColor": "hsl(143, 70%, 50%)",
                "Unexpected": n.unexpectedTotal,
                "kebabColor": "hsl(27, 70%, 50%)"
            }
        })

        console.log(data2)

        const data = [
            {
                "Month": 'Blah',
                "Needs": 200,
                "hot dogColor": "hsl(22, 70%, 50%)",
                "Wants": 400,
                "burgerColor": "hsl(335, 70%, 50%)",
                "Culture": 200,
                "sandwichColor": "hsl(143, 70%, 50%)",
                "Unexpected": 300,
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
                    data={ data2 }
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