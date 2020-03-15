import React, {Component} from 'react';
import {auth, fb} from "./firebase/fire";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem, Avatar,
    ListItemText, ListItemIcon
} from '@material-ui/core';
import {Home, Menu} from '@material-ui/icons';
import Bingo from './components/Bingo';
import HomePage from './components/HomePage';
import Popups from "./components/Popups";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            ready: false
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(async user => {
            if (user) {
                console.log(user);
                this.setState({
                    user
                }, this.ready)
            } else {
                this.setState({
                    user: null
                }, this.ready)
            }
        })
    }

    ready = () => {
        this.setState({
            ready: true
        })
    };

    render() {
        return (
            <div>
                {
                    this.state.ready &&
                    <div>
                        <div>
                            <Router>
                                <Switch>
                                    <Route exact path={'/'}
                                           component={props =>
                                               <HomePage {...props}
                                                         user={this.state.user}
                                               />}
                                    />
                                    <Route exact path={'/bingo'}
                                           component={props => <Bingo {...props}/>}
                                    />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default App;
