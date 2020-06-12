import { takeLatest, all, call, put } from 'redux-saga/effects';

import { firestore, getReviewCollections } from '../../firebase/firebase.utils';

import { fetchReviewsSuccess, fetchReviewsFailure } from './review.actions';

import ReviewActionTypes from './review.types';

export function* fetchReviewsAsync({ payload }) {
  try {
    const collectionRef = firestore.collection(
      `movieReviews/${payload}/reviews`
    );
    const snapshot = yield collectionRef.get();
    const reviews = yield call(getReviewCollections, snapshot);
    yield put(fetchReviewsSuccess(payload, reviews));
  } catch (error) {
    yield put(fetchReviewsFailure(error.message));
  }
}

export function* fetchReviewsStart() {
  yield takeLatest(ReviewActionTypes.FETCH_REVIEWS_START, fetchReviewsAsync);
}

export function* reviewSagas() {
  yield all([call(fetchReviewsStart)]);
}
