import React from 'react';

import ReviewEditor from '../../components/review-editor/review-editor.component';
import ReviewListContainer from '../../components/review-list/review-list.container';

import './movie-reviews-section.styles.scss';

const MovieReviewsSection = () => (
  <div>
    <ReviewEditor />
    <ReviewListContainer />
  </div>
);

export default MovieReviewsSection;
