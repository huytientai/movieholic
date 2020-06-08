import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import movieReducer from './movie/movie.reducer';
import reviewReducer from './review/review.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  review: reviewReducer
});

export default rootReducer;
