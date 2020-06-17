import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectUsersReview } from '../../redux/review/review.selectors';

import Review from '../review/review.component';
import ReviewEditor from '../review-editor/review-editor.component';

import {
  CurrentUserReviewContainer,
  CurrentUserReviewTitle,
  ReviewAndEditorContainer
} from './current-user-review.styles';

const CurrentUserReview = ({ currentUser, getCurrentUsersReview }) => {
  const currentUsersReview = getCurrentUsersReview([
    currentUser ? currentUser.id : ''
  ]);

  return (
    <CurrentUserReviewContainer>
      <CurrentUserReviewTitle>Your review</CurrentUserReviewTitle>
      <ReviewAndEditorContainer>
        {currentUser ? null : (
          <span>
            <Link to='/signin'>Sign in</Link> to share your thoughts
          </span>
        )}
        {currentUser && currentUsersReview ? (
          <Review {...currentUsersReview} />
        ) : null}
        {currentUser && !currentUsersReview ? <ReviewEditor /> : null}
      </ReviewAndEditorContainer>
    </CurrentUserReviewContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  getCurrentUsersReview: userIds => selectUsersReview(userIds)(state)[0]
});

export default connect(mapStateToProps)(CurrentUserReview);
