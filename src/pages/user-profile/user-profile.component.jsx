import React from 'react';

import ProfileInputForm from '../../components/profile-input-form/profile-input-form.component';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.component';

import { UserProfilePageContainer } from './user-profile.styles';

const UserProfilePage = () => (
  <UserProfilePageContainer>
    <ProfileInputForm />
    <ProfileAvatar />
  </UserProfilePageContainer>
);

export default UserProfilePage;
