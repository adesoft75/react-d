import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import green from '@material-ui/core/colors/green';

export default function AppHeader(props) {

  const green700 = green[700];;
  const headStr = 'Расходы ТЭС - ';
  const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1,},
    menuButton: {marginRight: theme.spacing(2),},
    title: {flexGrow: 1,},
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        style={{background: green700}}
      >
        <Toolbar>
          <IconButton            
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick= {() => props.onMenuClick()} 
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {headStr}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}