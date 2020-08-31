import React from 'react';
import '../../../styles/Spending/SpendingInfo/SpendingInfo.css'

const SpendingInfo = (props) => {
        return (
            <div className="Spending-Info">
                <header>Spending</header>

                <div className="Spending-Info__Sum">
                    {props.spending} <span>USD</span> 
                </div>
            </div>
        );
}

export default SpendingInfo