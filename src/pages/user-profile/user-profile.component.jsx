import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import ProfileInputForm from '../../components/profile-input-form/profile-input-form.component';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.component';

import { UserProfilePageContainer } from './user-profile.styles';

const UserProfilePage = ({ currentUser }) => (
  <UserProfilePageContainer>
    <ProfileInputForm currentUser={currentUser} />
    <ProfileAvatar currentUser={currentUser} />
  </UserProfilePageContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(UserProfilePage);
