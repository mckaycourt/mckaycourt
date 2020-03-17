import React from 'react';
import {Card, Grid} from "@material-ui/core";

const OffsetCard = props => {
    return (
        <Grid item>
            <Card style={{height: '400px', position: 'relative'}}>
                <div
                    // style={{transform: 'translate(150px, -50px)'}}
                >
                    <div style={{
                        position: 'absolute',
                        textAlign: 'center',
                        backgroundColor: 'rgba(105,105,105,0.5)',
                        top: 0,
                        left: 0,
                        padding: '20px',
                        marginTop: '100px',
                        textShadow: '1px 1px 2px #000',
                        fontSize: 'xx-large',
                        color: 'white'
                    }}>
                        {props.quote}
                    </div>
                    <img src={props.image}
                         style={{
                             height: '400px', borderRadius: '4px',
                             // boxShadow: '-10px 5px #888888'
                         }}
                    />
                </div>
                <div
                    // style={{marginTop: '-50px'}}
                >
                    {/*<CardHeader subheader={props.title}/>*/}
                    {/*<CardContent>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            Director: {props.director}*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            Stars:*/}
                    {/*        </li>*/}
                    {/*        <ul>*/}
                    {/*            {*/}
                    {/*                props.stars.map((star, key) =>*/}
                    {/*                    <li key={key}>*/}
                    {/*                        {star}*/}
                    {/*                    </li>*/}
                    {/*                )*/}
                    {/*            }*/}
                    {/*        </ul>*/}
                    {/*    </ul>*/}
                    {/*</CardContent>*/}
                </div>
            </Card>
        </Grid>
    )
};

export default OffsetCard;