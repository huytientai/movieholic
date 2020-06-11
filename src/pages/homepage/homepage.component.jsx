import React from 'react';

import IntroSection from '../../components/intro-section/intro-section.component';
import MovieCardListContainer from '../../components/movie-card-list/movie-card-list.container';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      <IntroSection />
      <MovieCardListContainer />
    </div>
  );
};

export default HomePage;
