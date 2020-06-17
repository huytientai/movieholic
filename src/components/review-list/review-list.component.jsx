import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectMovieId,
  selectOtherUsersReview
} from '../../redux/review/review.selectors';
import { fetchReviewsStart } from '../../redux/review/review.actions';

import Review from '../review/review.component';

import { ReviewListContainer } from './review-list.styles';

const ReviewList = ({
  currentUser,
  fetchedMovieId,
  getOtherUsersReviews,
  fetchReviewsStart
}) => {
  const { movieId } = useParams();

  const currentUserId = currentUser ? currentUser.id : '';

  const reviews = getOtherUsersReviews([currentUserId]);

  useEffect(() => {
    if (fetchedMovieId !== movieId) fetchReviewsStart(movieId);
  });

  return (
    <ReviewListContainer>
      {reviews.map(({ id, ...otherCollectionProps }) => (
        <Review key={id} id={id} {...otherCollectionProps} />
      ))}
    </ReviewListContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  fetchedMovieId: selectMovieId(state),
  getOtherUsersReviews: userIds => selectOtherUsersReview(userIds)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchReviewsStart: movieId => dispatch(fetchReviewsStart(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
