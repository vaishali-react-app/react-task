import React, { Component } from 'react';
import './App.css';
// import Slider from './component/Slider/Slider';
import TextFieldBox from "./pages/TextField/TextField";
import { MuiThemeProvider } from '@material-ui/core';
import Login from './pages/Login';
import AuthRoute from './pages/Routes/AuthRoute';
import PrivateRoute from './pages/Routes/PrivateRoute';
import NoMatch from '../src/component/NotFound';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'
import Trainee from './pages/Trainee/Trainee';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        
        <Router>
          <Switch>
          <PrivateRoute
              component={Login}
              path="/login"
            />
            <AuthRoute
              component={Trainee}
              exact path="/"
            />
            <AuthRoute
              component={TextFieldBox}
              exact path="/text-field"
            />
            <AuthRoute
              component={NoMatch}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

