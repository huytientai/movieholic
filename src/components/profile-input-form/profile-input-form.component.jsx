import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateProfileStart } from '../../redux/user/user.actions';

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

import CustomButton from '../custom-button/custom-button.component';

import {
  ProfileInputFormContainer,
  ProfileInputFormTitle,
  FirstNameAndLastNameInput,
  AgeAndGenderInput,
  ButtonsGroupContainer
} from './profile-input-form.styles';

const ProfileInputForm = ({ currentUser, updateProfileStart }) => {
  const [userInfo, setUserInfo] = useState(currentUser);

  const {
    id,
    displayName,
    firstName,
    lastName,
    phoneNumber,
    gender,
    age
  } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    updateProfileStart(id, {
      displayName,
      firstName,
      lastName,
      phoneNumber,
      gender,
      age
    });

    setUserInfo({
      ...userInfo,
      displayName: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      gender: '',
      age: 0
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <ProfileInputFormContainer>
      <ProfileInputFormTitle>Profile</ProfileInputFormTitle>
      <form onSubmit={handleSubmit}>
        <TextField
          name='email'
          type='email'
          value={currentUser.email}
          onChange={handleChange}
          label='Email'
          margin='normal'
          fullWidth
          disabled
        />
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
        <FirstNameAndLastNameInput>
          <TextField
            name='firstName'
            type='text'
            value={firstName}
            onChange={handleChange}
            label='First name'
            margin='normal'
          />
          <TextField
            name='lastName'
            type='text'
            value={lastName}
            onChange={handleChange}
            label='Last name'
            margin='normal'
          />
        </FirstNameAndLastNameInput>
        <TextField
          name='phoneNumber'
          type='text'
          value={phoneNumber}
          onChange={handleChange}
          label='Phone number'
          margin='normal'
        />
        <AgeAndGenderInput>
          <TextField
            name='age'
            type='number'
            value={age}
            onChange={handleChange}
            label='Age'
            margin='normal'
          />
          <FormControl margin='normal' style={{ minWidth: 120 }}>
            <InputLabel>Gender</InputLabel>
            <Select name='gender' value={gender} onChange={handleChange}>
              <MenuItem value={''}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </AgeAndGenderInput>
        <ButtonsGroupContainer>
          <CustomButton>SAVE</CustomButton>
        </ButtonsGroupContainer>
      </form>
    </ProfileInputFormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  updateProfileStart: (userId, profile) =>
    dispatch(updateProfileStart(userId, profile))
});

export default connect(null, mapDispatchToProps)(ProfileInputForm);
