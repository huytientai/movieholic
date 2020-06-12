import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';

import './review-editor.styles.scss';

const ReviewEditor = ({ currentUser }) => {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    const { value } = event.target;

    setComment(value);
  };

  return currentUser ? (
    <div className='review-editor'>
      <textarea
        className='comment-box'
        name='comment'
        value={comment}
        onChange={handleChange}
        placeholder='Please enter a review'
      />
      <div className='ratings-and-post-button'>
        <Rating name='rating' max={10} defaultValue={10} precision={0.5} />
        <Button variant='contained' color='primary'>
          Post
        </Button>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ReviewEditor);
