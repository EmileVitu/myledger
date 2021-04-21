// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Functions
import { getExpenses } from '../../actions/expenseActions'
// Styling
import { ResponsivePie } from '@nivo/pie'



export class ChartPieDisplay extends Component {

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
        
        // Filtering per category (specific to the pieChart)
        const categoryFilterNeeds = expenses.filter(expense => expense.category === 'Needs')
        const categoryFilterNeedsSum = categoryFilterNeeds.reduce((n, { amount }) => n + amount, 0)

        const categoryFilterWants = expenses.filter(expense => expense.category === 'Wants')
        const categoryFilterWantsSum = categoryFilterWants.reduce((n, { amount }) => n + amount, 0)

        const categoryFilterCulture = expenses.filter(expense => expense.category === 'Culture')
        const categoryFilterCultureSum = categoryFilterCulture.reduce((n, { amount }) => n + amount, 0)

        const categoryFilterUnexpected = expenses.filter(expense => expense.category === 'Unexpected')
        const categoryFilterUnexpectedSum = categoryFilterUnexpected.reduce((n, { amount }) => n + amount, 0)

        // Filtering by date

        // const result = expenses.reduce((r, { dateExpense, amount, category }) => {
        //     const dateObject = new Date(dateExpense)
        //     const total = expenses.amount*1
        //     const monthyear = dateObject.toLocaleString('en-us', { month: 'long', year: 'numeric' })
        //     if(!r[monthyear]){ r[monthyear] = { monthyear, entries: 1 , expense: {expenses}}}
        //     else r[monthyear].entries++
        //     return r
        // }, [])

        // console.log(Object.values(result))
        // console.log(result.total)
        // console.log(expenses.amount)


        // First filter category --> gives the global selector
        // Then filter years --> gives the years selector
        // Then filter the months --> gives the months and years selector

        // --> !!!!! each must return a different array to display in our pie

        const data = [
            {
              "id": "Needs",
              "label": " Needs",
              "value": categoryFilterNeedsSum,
              "color": "hsl(29, 70%, 50%)"
            },
            {
              "id": "Wants",
              "label": "Wants",
              "value": categoryFilterWantsSum,
              "color": "hsl(97, 70%, 50%)"
            },
            {
              "id": "Culture",
              "label": "Culture",
              "value": categoryFilterCultureSum,
              "color": "hsl(212, 70%, 50%)"
            },
            {
              "id": "Unexpected",
              "label": "Unexpected",
              "value": categoryFilterUnexpectedSum,
              "color": "hsl(173, 70%, 50%)"
            }
          ]

        return (
            <>
                { this.componentDidMount ? <div style={{height:500}}>
                    <ResponsivePie
                        data={data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor="#333333"
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: 'rgba(255, 255, 255, 0.3)',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'ruby'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'c'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'go'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'python'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'scala'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'lisp'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'elixir'
                                },
                                id: 'lines'
                            },
                            {
                                match: {
                                    id: 'javascript'
                                },
                                id: 'lines'
                            }
                        ]}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 56,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div> : null }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps, { getExpenses })(ChartPieDisplay)