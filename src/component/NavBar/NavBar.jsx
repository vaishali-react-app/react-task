import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Redirect } from 'react-router-dom'


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state={}
    }

    homeRedirect = () => {
        console.log('home');
        return <Redirect to='/home' />
        
    }

    render() {
        return (
            <AppBar color="primary" position="static">    
              <Toolbar>
                  <img src="../images/logo.png" alt="logo" />
              <List>
                <ListItem>
                    <ListItemText inset onClick={this.homeRedirect}>
                        <TypoGraphy color="inherit" variant="title">
                            Home
                   </TypoGraphy>
                    </ListItemText>
    
    
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Posts
                   </TypoGraphy>
                    </ListItemText>
    
    
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Contact
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