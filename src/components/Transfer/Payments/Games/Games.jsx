import React, { Component } from 'react';
import '../../../../styles/Transfer/Payments/Games/Games.css';
import CurrencyFormat from 'react-currency-format';


class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: '',
            sum: 0
        }
    }

    handleGameChange = (event) => {
        this.setState({ game: event.target.value })
    }

    handleSumChange = (event) => {
        this.setState({ sum: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="Games__Top-Con">
                    <select name="" id="Games__Select" onChange={this.handleGameChange}>
                        <option value="Game1">Game1</option>
                        <option value="Game2">Game2</option>
                        <option value="Game3">Game3</option>
                        <option value="Game4">Game4</option>
                        <option value="Game5">Game5</option>
                    </select>

                    <CurrencyFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        placeholder="Sum"
                        className="Games__Sum-Input"
                        onChange={this.handleSumChange} />
                </div>

                <div className="Games__Bottom-Con">
                    <button type="submit" className="Games__Btn" >Transfer money</button>
                </div>
            </form>
        )
    }
}

export default Games;