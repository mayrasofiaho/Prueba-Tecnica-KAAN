import React, {useState} from 'react';
import {makeStyles, Card, CardContent, Typography, LinearProgress} from '@material-ui/core'

const ProgressCard = (props: any) => {
    const [progress, setProgress] = useState(50);

    return (
      <Card variant="outlined">
        <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {props.overview}
                    </Typography>
                    <Typography variant="subtitle1" align='left' color="primary">First date emission: {props.date}</Typography>
                    <Typography variant="subtitle1" align='right' color="primary">{props.vote}%</Typography>
                    <LinearProgress variant="determinate" value={props.vote*10} />
        </CardContent>
    </Card>
    );
}

export default ProgressCard;