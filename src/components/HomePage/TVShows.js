import React, {Component} from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import OffsetCard from "./OffsetCard";
import {db, storage} from "../../firebase/fire";
import Button from "@material-ui/core/Button";

export default class TVShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvShows: []
        }
    }

    componentDidMount() {
        db.collection('tvShows').get()
            .then(async querySnapshot => {
                let tvShows = [];
                querySnapshot.forEach(row => {
                    tvShows.push(row.data());
                });
                for(let tvShow of tvShows){
                    tvShow.image = await storage.ref(tvShow.img).getDownloadURL();
                }
                this.setState({
                    tvShows
                })
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    addTvShows = () => {
        let tvShows = this.state.tvShows;
        for (let tvShow of tvShows) {
            db.collection('tvShows').doc().set(tvShow)
                .then(r => {
                    console.log(r);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    };

    render() {
        return (
            <Paper style={{margin: '25px', padding: '25px', backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
                <div style={{padding: '25px'}}>
                    <Typography component={'h5'} variant={'h5'}>Favorite TV Shows</Typography>
                    {
                        this.props.user && this.props.user.uid === 'qIR2ikYVBmUoJ4eAziDJf2Suq113' &&
                        <Button onClick={this.addTvShows}>Add TV Shows</Button>
                    }
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