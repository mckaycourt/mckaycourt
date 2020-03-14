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
            userPopup: false,
            drawer: false,
            ready: false
        }
    }

    userAnchor = React.createRef();

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

    login = () => {
        let provider = new fb.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                // console.log(result.user);
            })
            .catch(err => {
                console.error(err.message);
            });
    };

    logout = () => {
        auth.signOut()
            .then(() => {
                console.log('user signed out');
            });
    };

    toggleDrawer = () => {
        console.log('drawer');
        this.setState({
            drawer: !this.state.drawer
        })
    };

    toggleUserPopup = () => {
        this.setState({
            userPopup: !this.state.userPopup
        })
    };

    render() {
        return (
            <div>
                {
                    this.state.ready &&
                    <div>
                        <AppBar position={'static'} color={'primary'}>
                            <Toolbar>
                                <Grid container spacing={2} alignItems={'center'}>
                                    <Grid item style={{flexGrow: 1}}>
                                        <IconButton href={''} onClick={this.toggleDrawer}>
                                            <Menu style={{color: 'white'}}/>
                                        </IconButton>
                                    </Grid>
                                    {
                                        this.state.user ?
                                            <>
                                                <Grid item>
                                                    <IconButton onClick={this.toggleUserPopup} ref={this.userAnchor}>
                                                        <Avatar src={this.state.user.photoURL}/>
                                                    </IconButton>
                                                </Grid>
                                            </> :
                                            <Grid item>
                                                <Button onClick={this.login} variant={'contained'} color={'secondary'}>
                                                    Login
                                                </Button>
                                            </Grid>
                                    }

                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <Drawer anchor={'left'} open={this.state.drawer} onClose={this.toggleDrawer}>
                            <List component={'div'}>
                                <ListItem button component={'a'} href={'/'}>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Home'}/>
                                </ListItem>
                                <ListItem button component={'a'} href={'/bingo'}>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary={'Bingo'}/>
                                </ListItem>
                            </List>
                        </Drawer>
                        {
                            this.state.user &&
                            <Popups
                                user={this.state.user} toggleUserPopup={this.toggleUserPopup} logout={this.logout}
                                userPopup={this.state.userPopup}
                                userAnchor={this.userAnchor}
                            />
                        }
                        <div>
                            <Router>
                                <Switch>
                                    <Route exact path={'/'}
                                           component={props => <HomePage {...props}/>}
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
