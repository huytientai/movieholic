import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMoviesForPreview } from '../../redux/movie/movie.selectors';

import MovieCard from '../movie-card/movie-card.component';

import './movie-card-list.styles.scss';

const MovieCardList = ({ movies }) => {
  return (
    <div className='movie-card-list'>
      {movies.map(({ id, ...otherCollectionProps }) => (
        <MovieCard key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesForPreview
});

export default connect(mapStateToProps)(MovieCardList);
