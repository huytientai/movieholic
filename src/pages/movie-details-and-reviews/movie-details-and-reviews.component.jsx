import React from 'react';

import MovieDetailsSection from '../../components/movie-details-section/movie-details-section.component';
import MovieReviewsSection from '../../components/movie-reviews-section/movie-reviews-section.component';

import './movie-details-and-reviews.styles.scss';

const MovieDetailsAndReviewsPage = () => {
  return (
    <div>
      <MovieDetailsSection />
      <MovieReviewsSection />
    </div>
  );
};

export default MovieDetailsAndReviewsPage;
