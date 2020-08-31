import React, { Component } from 'react';
import '../../../styles/Home/UpcomingBills/UpcomingBills.css';

class UpcomingBills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null
        }
    }


    componentDidMount() {
        this.setDate();
      }
    
      setDate = (newDate) => {
        const date = newDate || new Date();
        this.setState({
          selectedDate:
            date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        });
      };
      getNextDate = () => {
        const { selectedDate } = this.state

        const today = new Date(selectedDate);
        const currentMonth = new Date(selectedDate).getMonth()
        const nextDate = new Date(today.getFullYear(), currentMonth+1, today.getDate())
        this.setDate(nextDate)
      }

    render() {
        return (
            <div className="Bills">
                <div className="Bills__Left-Con">
                    <img src={this.props.image} alt="" />

                    <div className="Bills__Left-Con__Info">
                        <div>{this.props.title}</div>
                        <div>{this.state.selectedDate}</div>
                    </div>
                </div>

                <div className="Bills__Right-Con">
                    ${this.props.price}
                    <button onClick={this.getNextDate}>Pay</button>
                </div>
            </div>
        )
    }
}



export default UpcomingBills