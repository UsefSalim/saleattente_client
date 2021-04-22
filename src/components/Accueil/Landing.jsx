import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const Landing = (props) => {
  const { toggle } = props;
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  });
  return (
    <>
      <img style={{ width: '180px' }} src={Logo} alt="Logo de l'hopitale" />
      <Typography variant="h1" component="h3">
        {date.toLocaleDateString()}
      </Typography>
      <Typography variant="h2" component="h3">
        {date.toLocaleTimeString()}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SendIcon />}
        onClick={toggle}
      >
        Connecter Vous
      </Button>
    </>
  );
};

export default Landing;
