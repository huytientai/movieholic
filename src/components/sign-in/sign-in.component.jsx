import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  facebookSignInStart,
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';

import { TextField } from '@material-ui/core';
import { IconButton, SvgIcon } from '@material-ui/core';

import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook-logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/icons/google-logo.svg';

import {
  SignInContainer,
  SignInTitle,
  SignInOptionsDescription,
  ButtonsBarContainer,
  IconGroup
} from './sign-in.styles';

const SignIn = ({
  facebookSignInStart,
  googleSignInStart,
  emailSignInStart
}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);

    setUserCredentials({ ...userCredentials, email: '', password: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='Email'
          margin='normal'
          fullWidth
        />
        <TextField
          required
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          margin='normal'
          fullWidth
        />

        <ButtonsBarContainer>
          <CustomButton>SIGN IN</CustomButton>
          <SignInOptionsDescription>or sign in with</SignInOptionsDescription>
          <IconGroup>
            <IconButton size='small' onClick={facebookSignInStart}>
              <SvgIcon fontSize='large'>
                <FacebookLogo />
              </SvgIcon>
            </IconButton>
            <IconButton size='small' onClick={googleSignInStart}>
              <SvgIcon fontSize='large'>
                <GoogleLogo />
              </SvgIcon>
            </IconButton>
          </IconGroup>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
