import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { deleteReviewStart } from '../../redux/review/review.actions';

import ReviewEditor from '../review-editor/review-editor.component';

import {
  Avatar,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import { Star, MoreVert } from '@material-ui/icons';

import {
  ReviewContainer,
  ReviewHeader,
  AvatarAndAuthorAndPostedTime,
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
  const [isDeleting, setIsDeleting] = useState(false);

  const { movieId } = useParams();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ReviewContainer>
      <ReviewHeader>
        <AvatarAndAuthorAndPostedTime>
          <Avatar
            alt={displayName}
            src={photoURL}
            style={{ width: '2.8em', height: '2.8em' }}
          />
          <AuthorAndPostedTime>
            <Author>{displayName}</Author>
            <PostedTime>
              Posted at {createdAt.toDate().toString().slice(0, 24)}
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
                  setIsEditing(true);
                  handleClose();
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setIsDeleting(true);
                  handleClose();
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </ReviewOptions>
        ) : null}
      </ReviewHeader>
      <ReviewContent>
        <Rating>
          <Star
            style={{ color: 'yellow', fontSize: '1.8vw', padding: '0 0.2em' }}
          />
          {rating}
        </Rating>
        <Comment>{comment}</Comment>
      </ReviewContent>
      <Dialog
        open={isEditing}
        onClose={() => setIsEditing(false)}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>Edit your review</DialogTitle>
        <DialogContent dividers>
          <ReviewEditor
            width='100%'
            currentUsersReview={{ id, comment, rating }}
            isEditing={isEditing}
            onFinish={() => setIsEditing(false)}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={isDeleting} onClose={() => setIsDeleting(false)}>
        <DialogTitle>Delete your review</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Doing so will delete your review for this movie. This operation can
            not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleting(false)} autoFocus>
            CANCEL
          </Button>
          <Button
            onClick={() => deleteReviewStart(movieId, id)}
            color='secondary'
            variant='contained'
            disableElevation
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
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
