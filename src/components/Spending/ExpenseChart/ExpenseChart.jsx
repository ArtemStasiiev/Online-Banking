import React, {Component} from 'react';
import '../../../styles/Spending/ExpenseChart/ExpenseChart.css';
import {Line} from 'react-chartjs-2';

class ExpenseChart extends Component {

    state = {
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
          datasets: [
            {label: 'Spendings per month', 
            data: [4, 5, 1, 10, 32, 2, 12, 50, 43, 56, 23, 41, 70, 34, 10, 30, 11, 28, 73, 45, 23,50, 47, 65, 58, 47, 39, 56, 80, 85, 90, 100], 
            borderColor: 'rgb(85, 73, 252)', 
            lineTension: 0.1, 
            pointBackgroundColor: 'white'},
          ]
        }
      }

    render() {
        return (
            <div className="ExpenseChartCon">
                <Line
                    options={{
                        responsive: true
                    }}
                    legend = {{
                        display: false
                    }}
                    data={this.state.data} />
            </div>
        );
    }
}

export default ExpenseChart;