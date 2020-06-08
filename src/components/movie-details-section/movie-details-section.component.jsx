import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOneMovie } from '../../redux/movie/movie.selectors';
import { selectIsMoviesLoaded } from '../../redux/movie/movie.selectors';
import { fetchMoviesStart } from '../../redux/movie/movie.actions';

import './movie-details-section.styles.scss';

const MovieDetailsSection = ({ isLoaded, fetchMoviesStart, movie }) => {
  if (!isLoaded) fetchMoviesStart();

  console.log(movie);

  return (
    <div>
      <h2>Movie details</h2>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsMoviesLoaded,
  movie: (state, props) => selectOneMovie(props.match.params.movieId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetailsSection)
);
