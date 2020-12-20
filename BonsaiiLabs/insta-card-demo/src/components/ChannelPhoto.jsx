import React from 'react'
import {makeStyles,Avatar} from '@material-ui/core';

const useStyle = makeStyles(theme =>({
    avatar:{
        width:theme.spacing(7),
        height:theme.spacing(7)
    }
}))

function ChannelPhoto() {
    const classes = useStyle();
    return (
        <Avatar alt="Nat Geo" className={classes.avatar}>

        </Avatar>
    )
}

export default ChannelPhoto
