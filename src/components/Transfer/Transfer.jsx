import React, { Component } from 'react';
import '../../styles/Transfer/Transfer.css';
import Payments from '../Transfer/Payments/Payments'
import Wallet from '../Home/Wallet/Wallet';

class Transfer extends Component {
    state = {
        cardMoney: 16.234
    }
    render() {
        return (
            <div className="Transfer">
                <div className="Transfer__Left-Con">
                    <Payments />
                </div>
                <div className="Transfer__Right-Con">
                    <Wallet cardMoney={this.state.cardMoney} className="Wallet" />
                </div>
            </div>
        );
    }
}

export default Transfer;