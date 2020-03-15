import React, {Component} from 'react';
import {Grid, Card, CardHeader, CardMedia, Paper, Typography, Slide, Grow, Zoom, CardContent} from "@material-ui/core";
import hero from '../images/hero.jpg';
import mckay1 from '../images/mckay1.png';
import mckay2 from '../images/mckay2.png';
import mckay3 from '../images/mckay3.png';
import MyMenu from "./Menu";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            go: false,
        }
    }

    componentDidMount() {
        let width = window.innerWidth;
        let go = true;
        this.setState({
            width, go
        })
    }

    render() {
        return (
            <div>
                <MyMenu user={this.props.user}/>
                <Paper style={{
                    position: 'relative',
                    color: 'white',
                    marginBottom: '10px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${hero})`,
                    height: '300px'
                }}>
                    <Grid container alignItems="center"
                          style={{backgroundColor: 'rgba(105,105,105,0.5)', height: '300px'}}>
                        <Grid item xs={12}>
                            <Typography component={'h4'} variant={'h4'} style={{
                                marginLeft: '15%',
                                textShadow: '1px 1px 2px #000'
                            }}>
                                McKay's Site
                            </Typography>
                            <Typography style={{marginLeft: '15%', fontSize: 'medium', textShadow: '1px 1px 2px #000'}}>
                                A Site About Nothing
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper>
                    <Grid container justify={'center'} spacing={2} style={{maxWidth: '100%'}}>
                        <Grid item style={{width: '400px'}}>
                            <div>
                                <Zoom direction={'up'} in={this.state.go} style={{transitionDelay: '300ms'}}>
                                    <Card>
                                        <CardHeader title={'This is title 1'} subheader={'this is the subheader'}/>
                                        <div style={{textAlign: 'center'}}>
                                            <img src={mckay2} style={{height: '200px'}}/>
                                        </div>
                                        <CardContent>
                                            Here is the main content
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </div>
                        </Grid>
                        <Grid item style={{width: '400px'}}>
                            <div>
                                <Zoom direction={'up'} in={this.state.go} style={{transitionDelay: '600ms'}}>
                                    <Card>
                                        <CardHeader title={'This is title 2'} subheader={'this is the subheader'}
                                                    style={{background: 'none'}}/>
                                        <div style={{textAlign: 'center'}}>
                                            <img src={mckay1} style={{height: '200px'}}/>
                                        </div>
                                        <CardContent>
                                            Here is the main content
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </div>
                        </Grid>
                        <Grid item style={{width: '400px'}}>
                            <div>
                                <Zoom direction={'up'} in={this.state.go} style={{transitionDelay: '900ms'}}>
                                    <Card>
                                        <CardHeader title={'This is title 3'} subheader={'this is the subheader'}/>
                                        <div style={{textAlign: 'center'}}>
                                            <img src={mckay3} style={{height: '200px'}}/>
                                        </div>
                                        <CardContent>
                                            Here is the main content
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}