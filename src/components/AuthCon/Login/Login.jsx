import React, { Component } from 'react';
import '../../../styles/AuthCon/Login/Login.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// import AuthService from '../../../services/auth.service'

class Login extends Component {

    render() {
        return (
            <div className="LoginForm">
                <div className="LoginFormHeader">
                    <div className="LoginIconCon">
                        <FontAwesomeIcon icon={faSignInAlt} className="LoginIcon" />
                        <div>Login</div>
                    </div>
                </div>

                <form onSubmit={this.handleLogin} className="LoginInputCon">
                    <div className="LoginEmailCon">
                        <div>Email</div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Email"
                            className="LoginEmailInp" />
                    </div>

                    <div className="LoginPasswordCon">
                        <div>Password</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="LoginPasswordInp" />
                    </div>

                    <div className="LoginLogBtnCon">
                        <button type="submit">Login</button>
                    </div>
                </form>

                <div className="LoginQuestionCon">
                    No account? <Link to="/register" className="RegisterLink"> Register </Link>
                </div>
            </div>
        )
    }
}

export default Login;