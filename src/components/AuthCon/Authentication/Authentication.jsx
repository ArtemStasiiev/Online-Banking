import React, { Component } from 'react';
import '../../../styles/AuthCon/Authentication/Authentication.css';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

class Authentication extends Component {
    render() {
        return (
            <div className="AuthenticationForm">
                <div className="AuthenticationHeader">
                    <div className="AuthenticationIconCon">
                        <FontAwesomeIcon icon={faPaypal} className="AuthPayPalIcon" />
                    </div>
                    <div className="AuthenticationHeaderText">Create an account or login</div>
                </div>

                <div className="AuthenticationBottom">
                    {/* <div className="RegisterBtnCon"> */}
                        <Link to="/register" className="RegisterBtnCon">
                            <button className="RegisterBtn">Register</button>
                        </Link>
                    {/* </div> */}

                    {/* <div className="LoginBtnCon"> */}
                        <Link to="/login" className="LoginBtnCon">
                            <button className="LoginBtn">Login</button>
                        </Link>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Authentication;

