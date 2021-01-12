import React, {useState} from 'react';
import {makeStyles, Card, CardContent, Typography, LinearProgress, Grid} from '@material-ui/core'

const ProgressCard = (props: any) => {
    const classes = useStyles();
    const [progress, setProgress] = useState(50);

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {props.overview}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1" align='left' color="primary">{props.vote}%</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1" align='right' color="primary">{props.date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <LinearProgress variant="determinate" value={props.vote} />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
  });

export default ProgressCard;