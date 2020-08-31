import React, {Component} from 'react';
import './App.css';
import Home from './components/Home/Home';
import History from './components/History/History';
import Investing from './components/Investing/Investing';
import Spending from './components/Spending/Spending';
import Transfer from './components/Transfer/Transfer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/history" component={History} />
              <Route path="/investing" component={Investing} />
              <Route path="/spending" component={Spending} />
              <Route path="/transfer" component={Transfer} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
