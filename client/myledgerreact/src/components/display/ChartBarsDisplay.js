// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar'
// Functions
import { getExpenses } from '../../actions/expenseActions'



export class ChartBarsDisplay extends Component {
    
    state = {
        data: [
            {
              "country": "AD",
              "hot dog": 104,
              "hot dogColor": "hsl(151, 70%, 50%)",
              "burger": 20,
              "burgerColor": "hsl(85, 70%, 50%)",
              "sandwich": 42,
              "sandwichColor": "hsl(218, 70%, 50%)",
              "kebab": 198,
              "kebabColor": "hsl(223, 70%, 50%)",
              "fries": 127,
              "friesColor": "hsl(152, 70%, 50%)",
              "donut": 16,
              "donutColor": "hsl(170, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 154,
              "hot dogColor": "hsl(37, 70%, 50%)",
              "burger": 106,
              "burgerColor": "hsl(351, 70%, 50%)",
              "sandwich": 166,
              "sandwichColor": "hsl(41, 70%, 50%)",
              "kebab": 0,
              "kebabColor": "hsl(314, 70%, 50%)",
              "fries": 160,
              "friesColor": "hsl(57, 70%, 50%)",
              "donut": 14,
              "donutColor": "hsl(191, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 156,
              "hot dogColor": "hsl(345, 70%, 50%)",
              "burger": 69,
              "burgerColor": "hsl(268, 70%, 50%)",
              "sandwich": 48,
              "sandwichColor": "hsl(74, 70%, 50%)",
              "kebab": 62,
              "kebabColor": "hsl(36, 70%, 50%)",
              "fries": 41,
              "friesColor": "hsl(68, 70%, 50%)",
              "donut": 8,
              "donutColor": "hsl(73, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 78,
              "hot dogColor": "hsl(64, 70%, 50%)",
              "burger": 107,
              "burgerColor": "hsl(284, 70%, 50%)",
              "sandwich": 91,
              "sandwichColor": "hsl(41, 70%, 50%)",
              "kebab": 78,
              "kebabColor": "hsl(226, 70%, 50%)",
              "fries": 159,
              "friesColor": "hsl(233, 70%, 50%)",
              "donut": 81,
              "donutColor": "hsl(108, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 160,
              "hot dogColor": "hsl(169, 70%, 50%)",
              "burger": 32,
              "burgerColor": "hsl(13, 70%, 50%)",
              "sandwich": 91,
              "sandwichColor": "hsl(318, 70%, 50%)",
              "kebab": 109,
              "kebabColor": "hsl(134, 70%, 50%)",
              "fries": 7,
              "friesColor": "hsl(214, 70%, 50%)",
              "donut": 152,
              "donutColor": "hsl(74, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 14,
              "hot dogColor": "hsl(256, 70%, 50%)",
              "burger": 55,
              "burgerColor": "hsl(312, 70%, 50%)",
              "sandwich": 152,
              "sandwichColor": "hsl(133, 70%, 50%)",
              "kebab": 25,
              "kebabColor": "hsl(82, 70%, 50%)",
              "fries": 131,
              "friesColor": "hsl(51, 70%, 50%)",
              "donut": 160,
              "donutColor": "hsl(237, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 105,
              "hot dogColor": "hsl(211, 70%, 50%)",
              "burger": 146,
              "burgerColor": "hsl(310, 70%, 50%)",
              "sandwich": 184,
              "sandwichColor": "hsl(103, 70%, 50%)",
              "kebab": 182,
              "kebabColor": "hsl(2, 70%, 50%)",
              "fries": 141,
              "friesColor": "hsl(137, 70%, 50%)",
              "donut": 157,
              "donutColor": "hsl(313, 70%, 50%)"
            }
          ]
    }

    static propTypes = {
        getExpenses: PropTypes.func.isRequired,
        expense: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getExpenses()
    }

    render() {

        const { expenses } = this.props.expense

        const data =  [
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
