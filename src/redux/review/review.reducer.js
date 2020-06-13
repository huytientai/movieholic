import ReviewActionTypes from './review.types';

const INITIAL_STATE = {
  movieId: undefined,
  reviews: [],
  isFetching: false,
  errorMessage: undefined
};

const reviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewActionTypes.FETCH_REVIEWS_START:
      return {
        ...state,
        isFetching: true
      };

    case ReviewActionTypes.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        movieId: action.payload.movieId,
        isFetching: false,
        reviews: action.payload.reviews
      };

    case ReviewActionTypes.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default reviewReducer;
