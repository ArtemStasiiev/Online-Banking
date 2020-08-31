import React from 'react'
import { Component } from 'react';
import Plot from 'react-plotly.js';

class NvidiaStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount = () => {
        this.fetchStock();
    }

    fetchStock = () => {
        const pointerToThis = this
        console.log(this)
        const API_KEY = "3PLB9LG173IP7Q8P";
        let StockSymbol = 'NVDA'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data)

                    for (let key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                    // console.log(stockChartXValuesFunction);
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                }
            )
    }

    render() {
        return (
            <Plot
                data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'green' },
                    },
                    // { type: 'line', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 720, height: 640, title: 'Nvidia stock chart', plot_bgcolor: 'rgba(0, 0, 0, 0.1)' }}
            />
        )
    }
}

export default NvidiaStock