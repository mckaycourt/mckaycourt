import React from 'react';
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";

const OffsetCard = props => {
    return (
        <Grid item>
            <Card style={{width: '250px', height: '600px'}}>
                <div
                    // style={{transform: 'translate(150px, -50px)'}}
                >
                    <img src={props.img}
                         style={{
                             width: '100%', borderRadius: '4px',
                             // boxShadow: '-10px 5px #888888'
                         }}
                    />
                </div>
                <div
                    // style={{marginTop: '-50px'}}
                >
                    {/*<CardHeader subheader={props.title}/>*/}
                    <CardContent>
                        <ul>
                            <li>
                                Director: {props.director}
                            </li>
                            <li>
                                Stars:
                            </li>
                            <ul>
                                {
                                    props.stars.map((star, key) =>
                                        <li key={key}>
                                            {star}
                                        </li>
                                    )
                                }
                            </ul>
                        </ul>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    )
};

export default OffsetCard;