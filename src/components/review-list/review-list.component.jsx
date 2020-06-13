import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchReviewsStart } from '../../redux/review/review.actions';
import {
  selectMovieId,
  selectReviews
} from '../../redux/review/review.selectors';

import Review from '../review/review.component';

const ReviewList = ({ fetchedMovieId, reviews, fetchReviewsStart }) => {
  const { movieId } = useParams();

  useEffect(() => {
    if (fetchedMovieId !== movieId) fetchReviewsStart(movieId);
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
  fetchedMovieId: selectMovieId,
  reviews: selectReviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviewsStart: movieId => dispatch(fetchReviewsStart(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
