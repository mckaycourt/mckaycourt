import React, {Component} from 'react';
import {Card, CardContent, CardHeader, Grid, Paper, Typography} from "@material-ui/core";
import batman from "../../images/batman.jpg";
import rotk from "../../images/rotk.jpg";
import empireStrikesBack from '../../images/empireStrikesBack.jpg';
import coco from '../../images/coco.jpg';
import OffsetCard from "./OffsetCard";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    title: 'The Dark Knight',
                    img: batman,
                    quote: '"If you\'re good at something never do it for free"',
                    director: 'Christopher Nolan',
                    stars: ['Christian Bale', 'yada yada yada'],
                    rating: ''
                },
                {
                    title: 'The Return of the King',
                    quote: '"I can’t carry it for you. But I can carry you!"',
                    img: rotk,
                    director: 'Peter Jackson',
                    stars: ['Elijah Wood', 'yada yada yada'],
                    rating: ''
                },
                {
                    title: 'Empire Strikes Back',
                    quote: '"I love you... I know..."',
                    img: empireStrikesBack,
                    director: 'George Lucas',
                    stars: ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
                    rating: ''
                },
                {
                    title: 'Coco',
                    img: coco,
                    quote: '"Never name a street dog"',
                    director: 'Lee Unkrich',
                    stars: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
                    rating: ''
                },
            ]
        }
    }

    render() {
        return (
            <Paper style={{margin: '25px', padding: '25px', backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                <div style={{padding: '25px'}}>
                    <Typography component={'h5'} variant={'h5'}>Favorite Movies</Typography>
                </div>
                <Grid container spacing={10} justify={'center'}>
                    {
                        this.state.movies.map((movie, key) =>
                            <OffsetCard {...movie} key={key}/>
                        )
                    }
                </Grid>
            </Paper>
        )
    }

}