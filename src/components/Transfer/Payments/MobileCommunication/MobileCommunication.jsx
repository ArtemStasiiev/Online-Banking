import React, {Component} from 'react';
import '../../../../styles/Transfer/Payments/MobileCommunication/MobileCommunication.css';

import InputMask from 'react-input-mask';
import CurrencyFormat from 'react-currency-format';

class MobileCommunication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: 0,
            sum: 0
        }
    }

    handlePhoneNumberChange = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }

    handleSumChange = (event) => {
        this.setState({ sum: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { phoneNumber, sum } = this.state
        return(
            <form className="Mobile__Form" onSubmit={() => this.handleSubmit}>
                <div className="Mobile__Inputs">
                    <div className="Mobile__Input1-Con">
                        <InputMask 
                            mask="+38\ (999) 99 99 999" 
                            placeholder="Phone number" 
                            className="Mobile__Input1"
                            onChange={this.handlePhoneNumberChange} />
                    </div>

                    <div className="Mobile__Input2-Con">
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            className="Mobile__Input2" 
                            placeholder="Sum"
                            onChange={this.handleSumChange} />                    
                    </div>
                    <div className="Mobile__Btn-Con">
                        <button type="submit" className="Mobile__Btn" disabled={!sum.length || phoneNumber.length > 19} >Transfer money</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default MobileCommunication;