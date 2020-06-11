import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import {
  ProfileAvatarContainer,
  ProfileAvatarTitle,
  UserAvatarAndUploadButton,
  UserAvatar,
  FileInput
} from './profile-avatar.styles';

const ProfileAvatar = ({ currentUser }) => {
  const { photoURL } = currentUser;

  const [selectedFile, setSelectedFile] = useState(photoURL);

  const handleUploadClick = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setSelectedFile([reader.result]);

    reader.readAsDataURL(file);

    setSelectedFile(event.target.files[0]);
  };

  return (
    <ProfileAvatarContainer>
      <ProfileAvatarTitle>Avatar</ProfileAvatarTitle>
      <UserAvatarAndUploadButton>
        <UserAvatar
          style={{ backgroundImage: `url(${selectedFile})` }}
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

export default ProfileAvatar;
