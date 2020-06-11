import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import './review-editor.styles.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
 
});

const ReviewEditor = ({ currentUser }) => {
  const classes = useStyles();
  return currentUser ? (
    <form className='review-editor'>
      <br/>
      <div>
      <TextareaAutosize aria-label="minimum height" rowsMin={6} placeholder="Please enter a review" />
      </div>
      <br/>
      <div className={classes.root}>
      <Rating name="half-rating" max={10} defaultValue={5} precision={0.5} size="large"/>
      </div>
      <br/>
      <Button variant="contained"color="primary"> Send </Button>
    </form>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ReviewEditor);
