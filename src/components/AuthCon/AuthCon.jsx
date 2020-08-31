import React, {Component} from 'react';
import '../../styles/AuthCon/AuthCon.css';
import Authentication from './Authentication/Authentication';
import Register from './Register/Register';
import Login from './Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class AuthCon extends Component {
    render() {
        return(
            <Router>
                <div className="Auth">
                    <Switch>
                        <Route path="/" exact component={Authentication} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AuthCon;