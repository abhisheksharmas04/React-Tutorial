import React from 'react';
import {Typography,Grid, makeStyles} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyle = makeStyles(theme =>({
    header:{
        color:theme.palette.grey[400],
        height:"15px"
    }
}))


const  Header = ()=> {
    const classes = useStyle();
    return (
        <Grid container justify="flex-end">
            <Grid item xs={1}>
                <ClearIcon className={classes.header}/>
            </Grid>
        </Grid>
    )
}

export default Header
