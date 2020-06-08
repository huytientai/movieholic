import MovieActionTypes from './movie.types';

export const fetchMoviesStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_START
});

export const fetchMoviesSuccess = movies => ({
  type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesFailure = errorMessage => ({
  type: MovieActionTypes.FETCH_MOVIES_FAILURE,
  payload: errorMessage
});
