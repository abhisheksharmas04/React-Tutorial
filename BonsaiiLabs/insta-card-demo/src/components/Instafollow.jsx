import React from 'react';
import {Grid, makeStyles} from '@material-ui/core'
import Header from './Header';
import ChannelPhoto from './ChannelPhoto';
import ChannelUserName from './ChannelUserName';
import ChannelName from './ChannelName';
import FollowButton from './FollowButton';

const useStyle = makeStyles(theme =>({
    root:{
        border:`1.2px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(2),
        borderRadius: "3px",
        maxWidth:200
    },
    header:{
        color:theme.palette.grey[400],
        height:"15px"
    }
}))

function Instafollow() {
    const classes = useStyle();
    return (
       <Grid container direction="column" alignItems="center" className={classes.root}>
           <Header/>
           <ChannelPhoto/>
           <ChannelUserName/>
           <ChannelName/>
           <FollowButton/>

       </Grid>
    )
}

export default Instafollow
