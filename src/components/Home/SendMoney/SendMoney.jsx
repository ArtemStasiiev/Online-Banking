import React, { Component } from 'react';
import '../../../styles/Home/SendMoney/SendMoney.css';
import NumberFormat from 'react-number-format';

class SendMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: 0,
            sum: 0,
            // disabled: true
        }
    }
    handleCardNumberChange = (event) => {
        this.setState({ cardNumber: event.target.value });
    }

    handleSumChange = (event) => {
        this.setState({ sum: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { cardNumber, sum } = this.state; 
        return (
            <div className="Send-Money">
                <header>Send money</header>

                <form className="Send-Money__Form" onSubmit={() => this.handleSubmit}>
                    <div className="Send-Money__Inputs__Input">
                        <NumberFormat
                            type="text"
                            name="cardNumber"
                            format="#### #### #### ####"
                            mask="_ "
                            autoComplete="off"
                            required
                            onChange={this.handleCardNumberChange} />
                        <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
                            <span className="Send-Money__Inputs__Input-Span">Card Number</span>
                        </label>
                    </div>

                    <div className="Send-Money__Inputs__Input">
                        <NumberFormat
                            type="text" name="cardNumber"
                            thousandSeparator={true}
                            prefix={'$'}
                            autoComplete="off"
                            required
                            onChange={this.handleSumChange} />
                        <label for="cardNumber" className="Send-Money__Inputs__Input-Label">
                            <span className="Send-Money__Inputs__Input-Span">Sum</span>
                        </label>
                    </div>
                    <button type="submit" className="Send-Money__Button" disabled={!sum.length || cardNumber.length > 19}>Send</button>
                </form>
            </div>
        )
    }
}

export default SendMoney;










// import React, {Component} from 'react';
// import {TextField} from '@material-ui/core';
// import {InputMask} from 'react-input-mask';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import NumberFormat from 'react-number-format';


// class SendMoney extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cardNumber: 0,
//             sum: 0
//         }
//     }

//     handleCardNumberChange = event => {
//         this.setState({cardNumber: event.target.value});
//     };

//     handleSumChange = event => {
//         this.setState({sum: event.target.value});
//     };

//     render() {
//         const {cardNumber, sum} = this.state;
//         return (
//             <div className="Send-Money">
//                 <h2>Send money</h2>
//                 <form className="Send-Money__Form">
//                     <TextField id="outlined-basic" type="number" label="UAH"
//                                value={cardNumber}
//                                onChange={this.handleCardNumberChange}
//                                className="Send-Money__Input1"/>
//                     <TextField id="outlined-basic" type="number" label="USD"
//                                value={sum}
//                                onChange={this.handleSumChange}
//                                className="Send-Money__Input2" />



//                     <input type="submit" value="Send" className="Send-Money__Button"
//                            disabled={!cardNumber || !sum.length || cardNumber.length < 14}/>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SendMoney;