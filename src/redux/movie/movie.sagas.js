import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertMoviesSnapshotToMap
} from '../../firebase/firebase.utils';

import { fetchMoviesSuccess, fetchMoviesFailure } from './movie.actions';

import MovieActionTypes from './movie.types';

export function* fetchMoviesAsync() {
  try {
    const collectionRef = firestore.collection('movies');
    const snapshot = yield collectionRef.get();
    const movies = yield call(convertMoviesSnapshotToMap, snapshot);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesFailure(error.message));
  }
}

export function* fetchMoviesStart() {
  yield takeLatest(MovieActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* movieSagas() {
  yield all([call(fetchMoviesStart)]);
}
