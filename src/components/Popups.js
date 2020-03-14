import React from 'react';
import {Card, CardActions, CardContent, CardHeader, Popover, Button} from "@material-ui/core";

const Popups = props => {
    return (
        <div>
            <Popover open={props.userPopup} onClose={props.toggleUserPopup} anchorEl={props.userAnchor.current}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'center',
                     }}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                     }}>
                <Card>
                    <CardHeader title={props.user.displayName} subheader={props.user.email}/>
                    {/*<CardContent>*/}
                    {/*    Some other interesting stuff*/}
                    {/*</CardContent>*/}
                    <CardActions>
                        <Button size={'small'} variant={'contained'} onClick={props.logout}>Logout</Button>
                    </CardActions>
                </Card>
            </Popover>
        </div>
    )
};

export default Popups;