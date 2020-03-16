import React, {Component} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import OffsetCard from "./OffsetCard";
import parks from '../../images/parksAndRec.jpg';
import office from '../../images/theOffice.jpg';
import seinfeld from '../../images/seinfeld.jpg';
import rock from '../../images/30rock.jpg';
import avatar from '../../images/avatar.jpg';

export default class TVShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvShows: [
                {
                    title: 'Parks and Recreation',
                    quote: '"Damn it I love this country so much."',
                    img: parks,
                    director: 'Greg Daniels, Michael Schur',
                    stars: ['Amy Poehler', 'Jim O\'Heir', 'Nick Offerman'],
                    rating: ''
                },
                {
                    title: 'The Office',
                    quote: '“I\'m not superstitious, but I am a little stitious.”',
                    img: office,
                    director: 'Greg Daniels',
                    stars: ['Steve Carell', 'Jenna Fischer', 'John Krasinski'],
                    rating: ''
                },
                {
                    title: 'Seinfeld',
                    quote: '"But are you still master of your domain?"',
                    img: seinfeld,
                    director: 'Larry David',
                    stars: ['Jerry Seinfeld', 'Julia Louis-Dreyfus', 'Michael Richards'],
                    rating: ''
                },
                {
                    title: '30 Rock',
                    quote: '"You still think Reagan is President? You lucky Bastard."',
                    img: rock,
                    director: 'Tina Fey',
                    stars: ['Tina Fey', 'Alec Baldwin', 'Tracy Morgan'],
                    rating: ''
                },
                {
                    title: 'Avatar: The Last Airbender',
                    quote: '"Life happens wherever you are, whether you make it or not."',
                    img: avatar,
                    director: 'Michael Dante DiMartino',
                    stars: ['Dee Bradley Baker', 'Zach Tyler', 'Jack De Sena'],
                    rating: ''
                },
            ]
        }
    }

    render() {
        return (
            <Paper style={{margin: '25px', padding: '25px', backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                <div style={{padding: '25px'}}>
                    <Typography component={'h5'} variant={'h5'}>Favorite TV Shows</Typography>
                </div>
                <Grid container spacing={10} justify={'center'}>
                    {
                        this.state.tvShows.map((tvShow, key) =>
                            <OffsetCard {...tvShow} key={key}/>
                        )
                    }
                </Grid>
            </Paper>
        )
    }
}