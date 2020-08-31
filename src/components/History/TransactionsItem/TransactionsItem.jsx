import React, {Component} from 'react';
import '../../../styles/History/TransactionsItem/TransactionsItem.css';

class TransactionsItem extends Component {

    render () {
        return (
            <div className="TransactionsItem">
                <div className="TransactionsItem__Left-Con">
                    {this.props.title}
                </div>

                <div className="TransactionsItem__Right-Con">
                    ${this.props.sum}
                </div>
            </div>
        )
    }
}

export default TransactionsItem