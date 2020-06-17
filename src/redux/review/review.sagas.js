import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  firestore,
  getReviewCollections,
  createReview,
  updateReview,
  deleteReview
} from '../../firebase/firebase.utils';

import {
  fetchReviewsSuccess,
  fetchReviewsFailure,
  createReviewSuccess,
  createReviewFailure,
  updateReviewSuccess,
  updateReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure
} from './review.actions';

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

export function* createReviewStart({ payload: { movieId, review } }) {
  try {
    const reviewRef = yield call(createReview, movieId, review);
    const reviewSnapshot = yield reviewRef.get();
    yield put(
      createReviewSuccess({
        id: reviewSnapshot.id,
        ...reviewSnapshot.data()
      })
    );
  } catch (error) {
    yield put(createReviewFailure(error.message));
  }
}

export function* updateReviewStart({ payload: { movieId, review } }) {
  try {
    const reviewRef = yield call(updateReview, movieId, review);
    const reviewSnapshot = yield reviewRef.get();
    yield put(
      updateReviewSuccess({
        id: reviewSnapshot.id,
        ...reviewSnapshot.data()
      })
    );
  } catch (error) {
    yield put(updateReviewFailure(error.message));
  }
}

export function* deleteReviewStart({ payload: { movieId, reviewId } }) {
  try {
    yield call(deleteReview, movieId, reviewId);
    yield put(deleteReviewSuccess(reviewId));
  } catch (error) {
    yield put(deleteReviewFailure(error.message));
  }
}

export function* onCreateReviewStart() {
  yield takeLatest(ReviewActionTypes.CREATE_REVIEW_START, createReviewStart);
}

export function* onUpdateReviewStart() {
  yield takeLatest(ReviewActionTypes.UPDATE_REVIEW_START, updateReviewStart);
}

export function* onDeleteReviewStart() {
  yield takeLatest(ReviewActionTypes.DELETE_REVIEW_START, deleteReviewStart);
}

export function* reviewSagas() {
  yield all([
    call(fetchReviewsStart),
    call(onCreateReviewStart),
    call(onUpdateReviewStart),
    call(onDeleteReviewStart)
  ]);
}
