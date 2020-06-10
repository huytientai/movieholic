import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';

import { TextField } from '@material-ui/core';

import {
  SignUpContainer,
  SignUpTitle,
  ButtonsBarContainer
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    signUpStart({ email, password, displayName });

    setUserCredentials({
      ...userCredentials,
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          label='Display name'
          margin='normal'
          fullWidth
        />
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
        <TextField
          required
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          margin='normal'
          fullWidth
        />
        <ButtonsBarContainer>
          <CustomButton>SIGN UP</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
