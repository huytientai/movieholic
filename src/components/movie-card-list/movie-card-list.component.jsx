import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMoviesStart } from '../../redux/movie/movie.actions';
import {
  selectIsMoviesLoaded,
  selectMoviesForPreview
} from '../../redux/movie/movie.selectors';

import MovieCard from '../movie-card/movie-card.component';

import './movie-card-list.styles.scss';

const MovieCardList = ({ isLoaded, movies, fetchMoviesStart }) => {
  useEffect(() => {
    if (!isLoaded) fetchMoviesStart();
  });

  return (
    <div className='movie-card-list'>
      {movies.map(({ id, ...otherCollectionProps }) => (
        <MovieCard key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsMoviesLoaded,
  movies: selectMoviesForPreview
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
