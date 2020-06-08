import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsMoviesLoaded } from '../../redux/movie/movie.selectors';

import MovieCardList from './movie-card-list.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsMoviesLoaded(state)
});

const MovieCardListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MovieCardList);

export default MovieCardListContainer;
