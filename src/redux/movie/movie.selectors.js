import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovies = createSelector(
  [selectMovie],
  movie => movie.movies
);

export const selectMoviesForPreview = createSelector([selectMovies], movies =>
  movies ? Object.keys(movies).map(key => movies[key]) : []
);

export const selectOneMovie = movieId =>
  createSelector([selectMovies], movies => (movies ? movies[movieId] : null));

export const selectIsMoviesFetching = createSelector(
  [selectMovie],
  movie => movie.isFetching
);

export const selectIsMoviesLoaded = createSelector(
  [selectMovie],
  movie => !!movie.movies
);
