import React from 'react';

import ProfileInputForm from '../../components/profile-input-form/profile-input-form.component';
import ProfileAvatarContainer from '../../components/profile-avatar-container/profile-avatar-container.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import './user-profile.styles.scss';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonBase from "@material-ui/core/ButtonBase";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: 8
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  },
  image: {
    width: 128,
    height: 256
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    "& > *": {
      margin: theme.spacing(4)
    }
  }
}));


const UserProfilePage = ({ currentUser}) => (
<div className={useStyles.root}>
<Grid container>
  <Grid container sm direction="row" spacing={4} justify="center">
    <Grid item xs={10}>
      <h1>Profile</h1>
    </Grid>
    <Grid item xs={10}>
      <TextField
	id="outlined-full-width"
	label="Username"
	fullWidth
	defaultValue="Default Value"
	variant="outlined"
      />
    </Grid>
    <Grid item xs={10}>
      <TextField
	id="outlined-full-width"
	label="Email"
	defaultValue="Default Value"
	fullWidth
	variant="outlined"
      />
    </Grid>

    <Grid item xs={5}>
      <TextField
	id="outlined-full-width"
	label="First Name"
	defaultValue="Default Value"
	fullWidth
	variant="outlined"
      />
    </Grid>
    <Grid item xs={5}>
      <TextField
	id="outlined-full-width"
	label="Last Name"
	defaultValue="Default Value"
	fullWidth
	variant="outlined"
      />
    </Grid>
    <Grid item xs={5}>
      <TextField
	id="outlined-full-width"
	label="Phone Number"
	defaultValue="Default Value"
	fullWidth
	variant="outlined"
      />
    </Grid>

    <Grid item xs={5}>
      <TextField
	id="date"
	label="Birthday"
	type="date"
	defaultValue="2017-05-24"
	fullWidth
	InputLabelProps={{
	  shrink: true
	}}
      />
    </Grid>
    <Grid item xs={10}>
      <div className={useStyles.button}>
	<Button variant="contained" color="primary">
	  Update
	</Button>
	<Button variant="contained">Cancle</Button>
      </div>
    </Grid>
  </Grid>

  <Grid container xs={3} direction="column">
    <Grid item xs={3}>
      <h1>Avatar</h1>
    </Grid>
    <Grid item xs={3}>
      <ProfileAvatarContainer cardName="Input Image" />
    </Grid>

  </Grid>
</Grid>
</div>
);





export default UserProfilePage;


