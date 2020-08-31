import React, { Component } from 'react';
import '../../../styles/AuthCon/Register/Register.css';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import UserContext from '../Context/Context';
// import { static } from 'express';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const nameRegex = RegExp(
    /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
)

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(value => {
        value === null && (valid = false);
    });

    return valid;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameSurname: null,
            email: null,
            password: null,
            formErrors: {
                nameSurname: "",
                email: "",
                password: ""
            }
        }
    }
    static contextType = UserContext 

    becomeClient = () => {
        
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
                --Submitting--
                Name/Surname: ${this.state.nameSurname}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `)
        } else {
            console.error(' FORM INVALID - DISPLAY ERROR MESSAGE')
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'nameSurname':
                formErrors.nameSurname =
                    nameRegex.test(value) ? "" : "invalid name or surname"
                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value) ? "" : "invalid email address";
                break;
            case 'password':
                formErrors.password =
                    value.length < 6 ? 'minimum 6 characters required' : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className="RegisterForm">
                <div className="RegisterFormHeader">
                    <div className="RegisterIconCon">
                        <FontAwesomeIcon icon={faUserPlus} className="RegisterIcon" />
                        <div>Register</div>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit} action="" className="RegisterInputCon" >
                    <div className="RegisterNameCon">
                        <div>Name</div>
                        <input
                            type="text"
                            name="nameSurname"
                            placeholder="Enter Name"
                            className="RegisterNameInp"
                            onChange={this.handleChange} />
                        {formErrors.nameSurname.length > 0 && (
                            <div className="Warning">{formErrors.nameSurname}</div>
                        )}
                    </div>

                    <div className="RegisterEmailCon">
                        <div>Email</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="RegisterEmailInp"
                            onChange={this.handleChange} />
                        {formErrors.email.length > 0 && (
                            <div className="Warning">{formErrors.email}</div>
                        )}
                    </div>

                    <div className="RegisterPasswordCon">
                        <div>Password</div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            className="RegisterPasswordInp"
                            onChange={this.handleChange} />
                        {formErrors.password.length > 0 && (
                            <div className="Warning">{formErrors.password}</div>
                        )}
                    </div>

                    <div className="RegisterRegBtnCon">
                        <button type="submit">Register</button>
                    </div>
                </form>

                <div className="RegisterQuestionCon">
                    Have an account? <Link to="login" className="LoginLink">Login</Link>
                </div>
            </div>
        )
    }
}

export default Register;