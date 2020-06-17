import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  createReviewStart,
  updateReviewStart
} from '../../redux/review/review.actions';

import CustomButton from '../custom-button/custom-button.component';

import { Rating } from '@material-ui/lab';
import { StarBorder } from '@material-ui/icons';

import {
  ReviewEditorContainer,
  CommentBox,
  OptionBar,
  RatingAndLabel,
  Label
} from './review-editor.styles';

const ReviewEditor = ({
  isEditing,
  onFinish,
  createReviewStart,
  updateReviewStart,
  currentUser,
  currentUsersReview,
  width
}) => {
  const [hover, setHover] = React.useState(-1);

  const [review, setReview] = useState({
    comment: currentUsersReview ? currentUsersReview.comment : '',
    rating: currentUsersReview ? currentUsersReview.rating : 10
  });

  const { comment, rating } = review;

  const { movieId } = useParams();

  const handleChange = event => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: name === 'rating' ? parseFloat(value) : value
    });
  };

  const handleSubmit = async event => {
    const { id: userId, displayName, photoURL } = currentUser;

    event.preventDefault();

    if (!isEditing)
      createReviewStart(movieId, {
        userId,
        displayName,
        photoURL,
        comment,
        rating,
        isSpoiler: false
      });
    else {
      updateReviewStart(movieId, {
        id: currentUsersReview.id,
        comment,
        rating,
        isSpoiler: false
      });

      onFinish();
    }

    setReview({ ...review, comment: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReviewEditorContainer width={width}>
        <CommentBox
          className='comment-box'
          name='comment'
          value={comment}
          onChange={handleChange}
          placeholder='Leave a comment here...'
        />
        <OptionBar>
          <RatingAndLabel>
            <Rating
              name='rating'
              value={rating}
              max={10}
              precision={0.5}
              emptyIcon={<StarBorder fontSize='inherit' />}
              onChange={handleChange}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            <Label>{hover !== -1 ? hover : rating}</Label>
          </RatingAndLabel>
          <CustomButton>Post</CustomButton>
        </OptionBar>
      </ReviewEditorContainer>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  createReviewStart: (movieId, review) =>
    dispatch(createReviewStart(movieId, review)),
  updateReviewStart: (movieId, review) =>
    dispatch(updateReviewStart(movieId, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditor);
