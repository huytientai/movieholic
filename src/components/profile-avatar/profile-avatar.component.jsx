import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { uploadAvatarStart } from '../../redux/user/user.actions';

import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import {
  ProfileAvatarContainer,
  ProfileAvatarTitle,
  UserAvatarAndUploadButton,
  UserAvatar,
  FileInput
} from './profile-avatar.styles';

const ProfileAvatar = ({ currentUser, uploadAvatarStart }) => {
  const { id, photoURL } = currentUser;

  const handleUploadClick = event => {
    const file = event.target.files[0];

    uploadAvatarStart(id, file);
  };

  return (
    <ProfileAvatarContainer>
      <ProfileAvatarTitle>Avatar</ProfileAvatarTitle>
      <UserAvatarAndUploadButton>
        <UserAvatar
          style={{ backgroundImage: `url(${photoURL})` }}
        ></UserAvatar>
        <FileInput
          id='upload-button'
          name='avatarUrl'
          type='file'
          accept='image/*'
          onChange={handleUploadClick}
        />
        <label htmlFor='upload-button'>
          <IconButton component='span'>
            <PhotoCamera />
          </IconButton>
        </label>
      </UserAvatarAndUploadButton>
    </ProfileAvatarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  uploadAvatarStart: (userId, file) => dispatch(uploadAvatarStart(userId, file))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAvatar);
