import ReviewActionTypes from './review.types';

export const fetchReviewsStart = movieId => ({
  type: ReviewActionTypes.FETCH_REVIEWS_START,
  payload: movieId
});

export const fetchReviewsSuccess = reviews => ({
  type: ReviewActionTypes.FETCH_REVIEWS_SUCCESS,
  payload: reviews
});

export const fetchReviewsFailure = errorMessage => ({
  type: ReviewActionTypes.FETCH_REVIEWS_FAILURE,
  payload: errorMessage
});
