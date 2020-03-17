import React, {Component} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import OffsetCard from "./OffsetCard";
import {db, storage} from '../../firebase/fire';
import Button from "@material-ui/core/Button";

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        db.collection('movies').get()
            .then(async querySnapshot => {
                let movies = [];
                querySnapshot.forEach(row => {
                    movies.push(row.data());
                });
                for (let movie of movies) {
                    movie.image = await storage.ref(movie.img).getDownloadURL();
                }
                this.setState({
                    movies
                })
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    addMovie = () => {
        db.collection('movies').doc().set({})
            .then(r => {
                console.log(r);
            })
            .catch(err => {
                console.error(err.message);
            })
    };

    render() {
        return (
            <Paper style={{margin: '25px', padding: '25px', backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                <div style={{padding: '25px'}}>
                    <Typography component={'h5'} variant={'h5'}>Favorite Movies</Typography>
                    {
                        this.props.user && this.props.user.uid === 'qIR2ikYVBmUoJ4eAziDJf2Suq113' &&
                        <Button onClick={this.addMovie}>Add Movie</Button>
                    }
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