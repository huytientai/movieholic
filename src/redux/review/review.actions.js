import ReviewActionTypes from './review.types';

export const fetchReviewsStart = movieId => ({
  type: ReviewActionTypes.FETCH_REVIEWS_START,
  payload: movieId
});

export const fetchReviewsSuccess = (movieId, reviews) => ({
  type: ReviewActionTypes.FETCH_REVIEWS_SUCCESS,
  payload: { movieId, reviews }
});

export const fetchReviewsFailure = errorMessage => ({
  type: ReviewActionTypes.FETCH_REVIEWS_FAILURE,
  payload: errorMessage
});

export const createReviewStart = (movieId, review) => ({
  type: ReviewActionTypes.CREATE_REVIEW_START,
  payload: { movieId, review }
});

export const createReviewSuccess = review => ({
  type: ReviewActionTypes.CREATE_REVIEW_SUCCESS,
  payload: review
});

export const createReviewFailure = errorMessage => ({
  type: ReviewActionTypes.CREATE_REVIEW_FAILURE,
  payload: errorMessage
});

export const updateReviewStart = (movieId, review) => ({
  type: ReviewActionTypes.UPDATE_REVIEW_START,
  payload: { movieId, review }
});

export const updateReviewSuccess = review => ({
  type: ReviewActionTypes.UPDATE_REVIEW_SUCCESS,
  payload: review
});

export const updateReviewFailure = errorMessage => ({
  type: ReviewActionTypes.UPDATE_REVIEW_FAILURE,
  payload: errorMessage
});

export const deleteReviewStart = (movieId, reviewId) => ({
  type: ReviewActionTypes.DELETE_REVIEW_START,
  payload: { movieId, reviewId }
});

export const deleteReviewSuccess = reviewId => ({
  type: ReviewActionTypes.DELETE_REVIEW_SUCCESS,
  payload: reviewId
});

export const deleteReviewFailure = errorMessage => ({
  type: ReviewActionTypes.DELETE_REVIEW_FAILURE,
  payload: errorMessage
});
