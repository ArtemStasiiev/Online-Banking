import React, { Component } from 'react';
import '../../../../styles/Transfer/Payments/Internet/Internet.css'
import CurrencyFormat from 'react-currency-format';


class Internet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            internetProvider: '',
            requisites: 0,
            sum: 0
        }
    }

    handleInternetProviderChange = (event) => {
        this.setState({ internetProvider: event.target.value });
    }

    handleRequisitesChange = (event) => {
        this.setState({ requisites: event.target.value });
    }

    handleSumChange = (event) => {
        this.setState({ sum: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={() => this.handleSubmit}>
                <div className="Internet__Top-Con">
                    <select name="" id="Internet__Select" onChange={this.handleInternetProviderChange}>
                        <option value="InternetProvider1">InternetProvider1</option>
                        <option value="InternetProvider2">InternetProvider2</option>
                        <option value="InternetProvider3">InternetProvider3</option>
                        <option value="InternetProvider4">InternetProvider4</option>
                        <option value="InternetProvider5">InternetProvider5</option>
                    </select>

                    <CurrencyFormat
                        placeholder="Requisites"
                        className="Internet__Requisites-Input"
                        format="#### ####"
                        mask="_ "
                        onChange={this.handleRequisitesChange} />
                </div>

                <div className="Internet__Bottom-Con">
                    <CurrencyFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        placeholder="Sum"
                        className="Internet__Sum-Input"
                        onChange={this.handleSumChange} />
                    <button type="submit" className="Internet__Btn">Transfer money</button>
                </div>
            </form>
        )
    }
}

export default Internet;