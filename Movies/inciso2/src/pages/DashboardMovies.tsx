import React, {useState, useEffect} from 'react';
import { Box, Grid, makeStyles, Typography, IconButton } from '@material-ui/core';
import MovieCard from '../components/MovieCard';
import ProgressCard from '../components/ProgressCard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const DashboardMovies = () => {
    const classes = useStyles();

    let url = 'https://api.themoviedb.org/3/discover/movie';
    let url1 = 'https://api.themoviedb.org/3/discover/tv';
    let api_key = '30a90ccbb0af0350f28445768c87e2c9';

    const [movies, setMovies] = useState<any[]>([]);
    const [series, setSeries] = useState<any[]>([]);

    useEffect(()=>{
        fetch(`${url}?api_key=${api_key}&sort_by=popularity.desc&page=1`)
            .then(res=>res.json())
            .then(response => {
                setMovies(response.results)
            })
            fetch(`${url1}?api_key=${api_key}&sort_by=popularity.desc&page=1`)
            .then(res=>res.json())
            .then(response => {
                setSeries(response.results)
            })
    })

    return(
        <Box display="flex" flexDirection="column" justifyContent="space-around" height="100%">
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={6}>
                    <Typography variant="h3" align="left" color="primary">Simple prototyping and collaboration.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align="right">Manage tasks, track processes and get the best results using a simple plataform.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h6">Peliculas</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="right">
                        <IconButton color="primary"><ArrowBackIosIcon/></IconButton>
                        <IconButton color="primary"><ArrowForwardIosIcon/></IconButton>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {movies.slice(16).map((movie, i) => (
                            <Grid item xs={3}>
                                <MovieCard title={movie.title} poster={movie.poster_path}/>
                            </Grid>           
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Series de TV</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="right">
                        <IconButton color="primary"><ArrowBackIosIcon/></IconButton>
                        <IconButton color="primary"><ArrowForwardIosIcon/></IconButton>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {series.slice(17).map((serie, i) => (
                            <Grid item xs={3}>
                                <ProgressCard name={serie.name} vote={serie.vote_average} overview={serie.overview} date= {serie.first_air_date}/>
                            </Grid>           
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '5%',
        paddingRight: '5%'
    },
}));

export default DashboardMovies;