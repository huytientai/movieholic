import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsMoviesLoaded } from '../../redux/movie/movie.selectors';
import { fetchMoviesStart } from '../../redux/movie/movie.actions';

import IntroSection from '../../components/intro-section/intro-section.component';
import MovieCardListContainer from '../../components/movie-card-list/movie-card-list.container';
import SearchBox from '../../components/search-box/search-box.component';

import './homepage.styles.scss';

const HomePage = ({ isLoaded, fetchMoviesStart }) => {
  if (!isLoaded) fetchMoviesStart();

  return (
    <div className='home-page'>
      <IntroSection />
      <MovieCardListContainer />
      <SearchBox/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsMoviesLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
