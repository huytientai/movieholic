import MovieActionTypes from './movie.types';

const INITIAL_STATE = {
  movies: null,
  isFetching: false,
  errorMessage: undefined
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true
      };

    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload
      };

    case MovieActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;
