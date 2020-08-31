import React, { Component } from 'react';
import MasterCard from '../../../img/mastercard.png'
import '../../../styles/Home/Wallet/Wallet.css'

class Wallet extends Component {
    state = {
        cardMoney: 16.234
    }
    render() {
        return (
            <div className="Wallet-Con">
                <header>Wallet</header>
                <div className="Card-Con">
                    <div className="Card">
                        <div className="Card__Usd-Number">
                            USD
                        </div>
                        <div className="Card__Money-Con">
                            <div>${this.state.cardMoney.toFixed(3)}</div>
                        </div>
                        <div className="Card__Number-Con">
                            <div className="Card__Number">**** 4439</div>
                            <img src={MasterCard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallet;