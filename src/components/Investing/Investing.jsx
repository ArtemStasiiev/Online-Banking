import React, {Component} from 'react';
import AmazonStock from './AmazonStock/AmazonStock';
import FacebookStock from './FacebookStock/FacebookStock';
import TeslaStock from './TeslaStock/TeslaStock';
import Nvidia from './NvidiaStock/NvidiaStock'
import '../../styles/Investing/Investing.css'

class Investing extends Component {
    render() {
        return (
        <div className="Investing">
            <div className="Investing__Left-Con">
                <AmazonStock />
                <FacebookStock />
            </div>

            <div className="Investing__Right-Con">
                <TeslaStock />
                <Nvidia />
            </div>
        </div>
        )
    }
}

export default Investing;