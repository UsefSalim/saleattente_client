import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { getUser } from '../../redux/slices/userSlice';
import NavBar from '../../components/utils/NavBar';
import SaleAttente from '../../components/Accueil/SaleAttente';

// const useStyles = makeStyles((theme) => ({
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));
const UserProfile = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const { userInfo, patient: { id_patient }, saleDispo } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const handelAddPatient = () => {
    console.log('add');
  };
  return (
    <>
      <NavBar />
      <Box my={2}>
        <Grid container>
          <Grid item xs={1} sm={2} />
          <Grid item xs={5} sm={4}>
            <Chip variant="outlined" label={`${userInfo.nom} -- ${userInfo.prenom}`} color="primary" avatar={<Avatar>U</Avatar>} />
          </Grid>
          <Grid item xs={5} sm={4}>
            <Chip variant="outlined" label={`${saleDispo.date} -- Total Patient  :${saleDispo.total_patient}`} color="primary" avatar={<Avatar>S</Avatar>} />
          </Grid>
          <Grid item xs={1} sm={2}>
            <IconButton aria-label="add" onClick={handelAddPatient}>
              <PostAddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <SaleAttente patients={id_patient} />

    </>
  );
};

export default UserProfile;
