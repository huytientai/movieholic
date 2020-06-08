import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchReviewsStart } from '../../redux/review/review.actions';
import {
  selectReviews,
  selectIsReviewsLoaded
} from '../../redux/review/review.selectors';

import Review from '../review/review.component';

import './review-list.styles.scss';

const ReviewList = ({ isLoaded, match, reviews, fetchReviewsStart }) => {
  const { movieId } = match.params;

  useEffect(() => {
    if (!isLoaded) fetchReviewsStart(movieId);
  });

  return (
    <div className='review-list'>
      <h2>Review list</h2>
      {reviews.map(({ id, ...otherCollectionProps }) => (
        <Review key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsReviewsLoaded,
  reviews: selectReviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviewsStart: movieId => dispatch(fetchReviewsStart(movieId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
);
