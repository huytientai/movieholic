import ReviewActionTypes from './review.types';

const INITIAL_STATE = {
  reviews: null,
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
        isFetching: false,
        reviews: action.payload
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
