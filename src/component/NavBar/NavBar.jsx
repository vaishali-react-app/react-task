import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';


class NavBar extends Component {

    render() {
        return (
            <AppBar color="primary" position="static">    
              <Toolbar>
                  <img src="../images/logo.png" alt="logo" />
              <List>
                <ListItem>
                    <ListItemText inset>
                   <TypoGraphy color="inherit" variant="title">
                           <Link to="/">Add Trainee</Link>
                   </TypoGraphy>
                    </ListItemText>
    
    
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/text-field">Text Field </Link>
                   </TypoGraphy>
                    </ListItemText>
    
    
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <Link to="/login">Login</Link>
                   </TypoGraphy>
                    </ListItemText>
                </ListItem >
    
            </List>
              </Toolbar>
            </AppBar>
           
        )
    }
}


export default NavBar;