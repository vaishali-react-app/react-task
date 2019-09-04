import React, { Component } from 'react';
import './App.css';
// import Slider from './component/Slider/Slider';
import TextFieldBox from "./pages/TextField/TextField";
import { MuiThemeProvider } from '@material-ui/core';
 import {NavBar} from './component'
import Login from './pages/Login';
import AuthRoute from './pages/Routes/AuthRoute';
import PrivateRoute from './pages/Routes/PrivateRoute';
import NoMatch from '../src/component/NotFound';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        
        <Router>
          <Switch>
            <AuthRoute
              component={TextFieldBox}
              exact path="/"
            />
            <AuthRoute
              component={NoMatch}
            />
            <PrivateRoute
              component={Login}
              path="/login"
            />
            {/* <AuthRoute
              component={NoMatch}
            />
            <noMatch /> */}
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

