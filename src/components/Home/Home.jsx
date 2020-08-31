import React, { Component } from 'react';
import '../../styles/Home/Home.css';
import Wallet from './Wallet/Wallet';
import SendMoney from './SendMoney/SendMoney';
import UpcomingBills from './UpcomingBills/UpcomingBills'
import SpendingBreakdown from './SpendingBreakdown/SpendingBreakdown'
// import upcomingBills from './UpcomingBills/UpcomingBills';
// import moment from 'moment'
class Home extends Component {

    state = {
        upcomingBills: [
            { title: 'Netflix', price: 12, image: require('../../img/netflix-icon.jpg'), id: 1, date: '2020-07-21' },
            { title: 'Apple TV', price: 10, image: require('../../img/apple-tv-icon.svg'), id: 2, date: '2020-07-21' },
            { title: '+38 063 56 87 154', price: 5, image: require('../../img/lifecell-icon.jpg'), id: 3, date: '2020-07-21' }
        ],
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        spendingBreakdown: [
            { title: 'Grocery', sum: 766 },
            { title: 'Bills', sum: 456 },
            { title: 'Transport', sum: 255 },
            { title: 'Subscriptions', sum: 181 },
            { title: 'Entertainment', sum: 134 },
            { title: 'Apparel', sum: 96 },
            { title: 'Other', sum: 54 }
        ],
        selectedDate: null,
        startDate: new Date('2020-07-21')
    }

    render() {
        const upcomingBills = this.state.upcomingBills.map(element =>
            <UpcomingBills
                title={element.title}
                price={element.price}
                image={element.image}
                id={element.id}
                date={element.date} />);

        const spendingBreakdown = this.state.spendingBreakdown.map(element =>
            <SpendingBreakdown
                title={element.title}
                color={element.color}
                ammount={element.sum} />);

        return (
            <div className="Home">
                <div className="Home__Left-Con">
                    <Wallet />
                    <SendMoney />
                </div>
                <div className="Home__Right-Con">
                    <div className="Upcoming-Bills">
                        <header>Upcoming Bills </header>
                        <div className="Upcoming-Bills__Month">
                            {this.state.monthNames[new Date().getMonth()]}
                        </div>
                        {upcomingBills}
                    </div>
                    <div className="Spending-Breakdown">
                        <header>Spending breakdown</header>
                        {spendingBreakdown}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;