import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Drawer, List, Divider, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SpaIcon from '@material-ui/icons/Spa';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DashboardMovies from './pages/DashboardMovies';


export default function App() {
  const classes = useStyles();

  const icons = (index: number) => {
    switch(index) {
      case 0:   return <DashboardIcon />;
      case 1:   return <BookmarkBorderIcon />;
      case 2:   return <MailOutlineIcon/>;
      case 3:   return <CalendarTodayIcon />;
      case 4:   return <PersonOutlineIcon />;
      default:      return <SettingsOutlinedIcon />;
    }
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography className={classes.root} variant="h5"><SpaIcon /> Craftwork </Typography>
        <div className={classes.drawerContainer}>
          <Typography variant="overline">
            Categories
          </Typography>
          <Divider />
          <List>
            {['Dashboard', 'Featured', 'Messages', 'Calendar', 'Profile', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {icons(index)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Typography variant="overline">
            Projects
          </Typography>
          <Divider />
          <List>
            {['Method', 'Singleton', 'Superscene'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon><FolderOpenIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <DashboardMovies/>
      </main>
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: 'inherit',
      padding: theme.spacing(3),
    },
    title:{
      padding: theme.spacing(2)
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      padding: theme.spacing(3),
    },
    content: {
      width: '100%',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
    },
  }),
);