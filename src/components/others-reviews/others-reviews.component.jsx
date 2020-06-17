import React from 'react';

import ReviewListContainer from '../review-list/review-list.container';

import {
  OthersReviewsContainer,
  OthersReviewsTitle
} from './others-reviews.styles';

const OthersReviews = () => (
  <OthersReviewsContainer>
    <OthersReviewsTitle>Others' reviews</OthersReviewsTitle>
    <ReviewListContainer />
  </OthersReviewsContainer>
);

export default OthersReviews;
