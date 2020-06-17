import React from 'react';

import CurrentUserReview from '../../components/current-user-review/current-user-review.component';
import OthersReviews from '../../components/others-reviews/others-reviews.component';

import { MovieReviewsSectionContainer } from './movie-reviews-section.styles';

const MovieReviewsSection = () => (
  <MovieReviewsSectionContainer>
    <CurrentUserReview />
    <OthersReviews />
  </MovieReviewsSectionContainer>
);

export default MovieReviewsSection;
