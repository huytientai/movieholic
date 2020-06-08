import React from 'react';

import './review.styles.scss';

const Review = ({
  id,
  userId,
  comment,
  ratings,
  spoil,
  createdAt,
  editedAt
}) => {
  return (
    <div>
      <p>{comment}</p>
    </div>
  );
};

export default Review;
