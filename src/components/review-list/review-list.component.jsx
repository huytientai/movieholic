import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchReviewsStart } from '../../redux/review/review.actions';
import {
  selectMovieId,
  selectReviews
} from '../../redux/review/review.selectors';

import Review from '../review/review.component';

import './review-list.styles.scss';

const ReviewList = ({ movieId, match, reviews, fetchReviewsStart }) => {
  useEffect(() => {
    if (movieId !== match.params.movieId)
      fetchReviewsStart(match.params.movieId);
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
  movieId: selectMovieId,
  reviews: selectReviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviewsStart: movieId => dispatch(fetchReviewsStart(movieId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewList)
);
