import React, {Component} from 'react';
import '../../styles/History/History.css';
import TransactionsItem from './TransactionsItem/TransactionsItem';
import BillsItem from './BillsItem/BillsItem';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionsItems: [
                {title:'5367 7603 5710 9553', sum: 50},
                {title: 'Rocket Espresso', sum: 10},
                {title: '6804 7846 9752 2365', sum: 100},
                {title: 'Rocket Espresso', sum: 10},
                {title: '9025 8503 7501 8611', sum: 50},
                {title:'5367 7603 5710 9553', sum: 50},
                {title: 'Rocket Espresso', sum: 10},
                {title: '6804 7846 9752 2365', sum: 100},
                {title: 'Rocket Espresso', sum: 10},
                {title: '9025 8503 7501 8611', sum: 50}
            ],
            billsItems: [
                {title: 'Netflix', price: 12},
                {title: 'Apple TV', price: 10},
                {title: '+38 063 56 87 154', price: 5},
                {title: 'Credit Agricole', price: 100},
            ]
        }
    }
    render() {
        const transactionsItem = this.state.transactionsItems.map(element =>
            <TransactionsItem
                title = {element.title}
                sum = {element.sum} />);

        const billsItem = this.state.billsItems.map(element => 
            <BillsItem 
                title = {element.title}
                price = {element.price} />)

        return(
        <div className="HistoryCon">
            <div className="TransactionsHistory">
                <header>Transactions</header>
                <div className="TransactionsHistory__Items">
                    {transactionsItem}
                </div>
            </div>

            <div className="BillsHistory">
                <header>Bills</header>
                <div className="BillsHistory__Items">
                    {billsItem}
                </div>
            </div>
        </div>
        )
    }
}

export default History;