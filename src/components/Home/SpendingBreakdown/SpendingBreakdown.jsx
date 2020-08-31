import React from 'react';
import '../../../styles/Home/SpendingBreakdown/SpendingBreakdown.css'

const spendingBreakdown = (props) => {
    return (
        <div className="Spending-Breakdown__Items">
            <div className="Spending-Breakdown__Type">{props.title}</div>
            <div className="Spending-Breakdown__Price">${props.ammount}</div>
        </div>
    );
}

export default spendingBreakdown;