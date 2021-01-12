import React, {useState} from 'react';
import {makeStyles, Card, CardActions, CardContent,IconButton, CardMedia, Button, Typography} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const MovieCard = (props: any) => {
    const classes = useStyles();

return (
    <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} gutterBottom>{props.title}</Typography>
            <CardMedia image={`https://image.tmdb.org/t/p/w500/${props.poster}`} className={classes.media}>

            </CardMedia>
        </CardContent>
        <CardActions>
            <IconButton color="primary" size="small"><ArrowForwardIcon/></IconButton>
        </CardActions>
    </Card>
    );
}

const useStyles = makeStyles({
    root: {
      backgroundColor: '#6A88E5'
    },
    title: {
      fontSize: 14,
      color: 'white'
    },
    media: {
        height: 0,
        paddingTop: '150%',
      },
  });

export default MovieCard;