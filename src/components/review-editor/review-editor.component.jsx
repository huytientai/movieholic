import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './review-editor.styles.scss';

const ReviewEditor = ({ currentUser }) => {
  return currentUser ? (
    <div className='review-editor'>
      <textarea placeholder='Add your comment here...' />
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ReviewEditor);
