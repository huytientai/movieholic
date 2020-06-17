import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { deleteReviewStart } from '../../redux/review/review.actions';

import ReviewEditor from '../review-editor/review-editor.component';

import {
  Menu,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import { Star, MoreVert } from '@material-ui/icons';

import {
  ReviewContainer,
  ReviewHeader,
  AvatarAndAuthorAndPostedTime,
  Avatar,
  AuthorAndPostedTime,
  Author,
  PostedTime,
  ReviewOptions,
  ReviewContent,
  Rating,
  Comment
} from './review.styles';

const Review = ({
  currentUser,
  deleteReviewStart,
  id,
  userId,
  displayName,
  photoURL,
  comment,
  rating,
  isSpoiler,
  createdAt,
  editedAt
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const currentUserId = currentUser ? currentUser.id : '';

  const [isEditing, setIsEditing] = useState(false);

  const { movieId } = useParams();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <ReviewContainer>
      <ReviewHeader>
        <AvatarAndAuthorAndPostedTime>
          <Avatar alt={displayName} src={photoURL} />
          <AuthorAndPostedTime>
            <Author>{displayName}</Author>
            <PostedTime>
              Posted at {Date(createdAt.seconds).toString().slice(0, 24)}
            </PostedTime>
          </AuthorAndPostedTime>
        </AvatarAndAuthorAndPostedTime>
        {currentUserId === userId ? (
          <ReviewOptions>
            <IconButton onClick={handleMenu} color='inherit'>
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  toggleEditing();
                  handleClose();
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  deleteReviewStart(movieId, id);
                  handleClose();
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </ReviewOptions>
        ) : null}
      </ReviewHeader>
      {isEditing ? (
        <Dialog
          open={isEditing}
          onClose={toggleEditing}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>Edit review</DialogTitle>
          <DialogContent dividers>
            <ReviewEditor
              width='100%'
              currentUser={currentUser}
              currentUsersReview={{ id, comment, rating }}
              isEditing={isEditing}
              onFinish={toggleEditing}
            />
          </DialogContent>
        </Dialog>
      ) : (
        <ReviewContent>
          <Rating>
            <Star
              style={{ color: 'yellow', fontSize: '1.8vw', padding: '0 0.2em' }}
            />
            {rating}
          </Rating>
          <Comment>{comment}</Comment>
        </ReviewContent>
      )}
    </ReviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  deleteReviewStart: (movieId, reviewId) =>
    dispatch(deleteReviewStart(movieId, reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
