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

    render() {

        const data = [
            {
              "Raoul": 196,
              "Josiane": 113,
              "Marcel": 70,
              "René": 87,
              "Paul": 83,
              "Jacques": 68
            },
            {
              "Raoul": 16,
              "Josiane": 38,
              "Marcel": 33,
              "René": 34,
              "Paul": 81,
              "Jacques": 111
            },
            {
              "Raoul": 55,
              "Josiane": 81,
              "Marcel": 28,
              "René": 190,
              "Paul": 132,
              "Jacques": 36
            },
            {
              "Raoul": 143,
              "Josiane": 103,
              "Marcel": 53,
              "René": 157,
              "Paul": 56,
              "Jacques": 18
            },
            {
              "Raoul": 191,
              "Josiane": 116,
              "Marcel": 185,
              "René": 118,
              "Paul": 65,
              "Jacques": 75
            },
            {
              "Raoul": 124,
              "Josiane": 26,
              "Marcel": 41,
              "René": 153,
              "Paul": 114,
              "Jacques": 118
            },
            {
              "Raoul": 169,
              "Josiane": 116,
              "Marcel": 175,
              "René": 59,
              "Paul": 119,
              "Jacques": 150
            },
            {
              "Raoul": 121,
              "Josiane": 199,
              "Marcel": 30,
              "René": 63,
              "Paul": 73,
              "Jacques": 70
            },
            {
              "Raoul": 31,
              "Josiane": 91,
              "Marcel": 11,
              "René": 71,
              "Paul": 142,
              "Jacques": 151
            }
          ]

        return (
            <div style={{height:500}}>
                    <ResponsiveStream
                        data={data}
                        keys={[ 'Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques' ]}
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
                                    id: 'Paul'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'Marcel'
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
