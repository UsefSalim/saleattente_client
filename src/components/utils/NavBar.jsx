import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../redux/slices/authSlice';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(getLogout());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Saada
          </Typography>
          <Button color="inherit" onClick={handelLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
