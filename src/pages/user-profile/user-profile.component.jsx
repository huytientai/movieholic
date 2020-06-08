import React from 'react';

import ProfileInputForm from '../../components/profile-input-form/profile-input-form.component';
import ProfileAvatarContainer from '../../components/profile-avatar-container/profile-avatar-container.component';

import './user-profile.styles.scss';

const UserProfilePage = () => (
  <div>
    <h1>User Profile Page</h1>
    <ProfileInputForm />
    <ProfileAvatarContainer />
  </div>
);

export default UserProfilePage;
