import React, {Component} from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    Toolbar
} from "@material-ui/core";
import {Home, Menu} from "@material-ui/icons";
import Popups from "./Popups";
import {auth, fb} from "../firebase/fire";

export default class MyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPopup: false,
            drawer: false,
        }
    }

    userAnchor = React.createRef();

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
                <AppBar position={'static'} style={{backgroundColor: 'darkslateblue'}}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item style={{flexGrow: 1}}>
                                <IconButton href={''} onClick={this.toggleDrawer}>
                                    <Menu style={{color: 'white'}}/>
                                </IconButton>
                            </Grid>
                            {
                                this.props.user ?
                                    <>
                                        <Grid item>
                                            <IconButton onClick={this.toggleUserPopup} ref={this.userAnchor}>
                                                <Avatar src={this.props.user.photoURL}/>
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
                    this.props.user &&
                    <Popups
                        user={this.props.user} toggleUserPopup={this.toggleUserPopup} logout={this.logout}
                        userPopup={this.state.userPopup}
                        userAnchor={this.userAnchor}
                    />
                }
            </div>
        )
    }
}