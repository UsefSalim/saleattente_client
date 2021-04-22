import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Logo from '../../assets/images/logo.png';
import HomePageImage from '../../assets/images/HomePage.jpg';

const useStyles = makeStyles((theme) => ({
  landingPage: {
    backgroundImage: `url(${HomePageImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'calc(100vw )',
    height: 'calc(100vh )',
    filter: 'blur(3px)',
  },
  contentHome: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#f1f1f1',
    fontWeight: 'bold',
    border: '3px solid #f1f1f1',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    width: '80%',
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(3),
  },
}));
const Home = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <>
      <Paper className={classes.landingPage} />
      <div className={classes.contentHome}>
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
        >
          <Link to="login">Connecter Vous</Link>
        </Button>
      </div>
    </>
  );
};
export default Home;
