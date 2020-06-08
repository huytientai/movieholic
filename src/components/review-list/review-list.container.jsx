import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsReviewsFetching } from '../../redux/review/review.selectors';

import ReviewList from './review-list.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsReviewsFetching
});

const ReviewListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ReviewList);

export default ReviewListContainer;
