import React,{Component} from 'react';
import '../../../styles/History/BillsItem/BillsItem.css'

class BillsItem extends Component {
    render() {
        return(
            <div className="BillsItem">
                <div className="BillsItem__Left-Con">
                    {this.props.title}
                </div>

                <div className="BillsItem__Right-Con">
                    ${this.props.price}
                </div>
            </div>
        )
    }
}

export default BillsItem