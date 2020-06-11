import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOneMovie } from '../../redux/movie/movie.selectors';
import { selectIsMoviesLoaded } from '../../redux/movie/movie.selectors';
import { fetchMoviesStart } from '../../redux/movie/movie.actions';

import { baseUrl } from '../../data/movie.urls';

import Rating from '@material-ui/lab/Rating';


import {
  MovieDetailsSectionContainer,
  Backdrop,
  Details,
  Poster,
  Description,
  Title,
  ReleaseDate,
  GenresAndDuration,
  Genre,
  Duration,
  RatingsAverage,
  Tagline,
  Overview,
  ProductionCompanies
} from './movie-details-section.styles';

const MovieDetailsSection = ({ isLoaded, fetchMoviesStart, movie }) => {
  if (!isLoaded) fetchMoviesStart();

  if (movie) {
    const {
      backdrop_path,
      poster_path,
      title,
      release_date,
      genres,
      runtime,
      vote_average,
      tagline,
      overview,
      production_companies
    } = movie;

    const backdropSize = '/original';
    const posterSize = '/w300';
    const companyLogoSize = '/w200';

    return (
      <MovieDetailsSectionContainer>
        <Backdrop
          style={{
            backgroundImage: `url(${baseUrl}${backdropSize}${backdrop_path})`
          }}
        />
        <Details>
          <Poster
            src={`${baseUrl}${posterSize}${poster_path}`}
            alt='movie-poster'
          />
          <Description>
            <Title>{title}</Title>
            <ReleaseDate>({release_date.slice(0, 4)})</ReleaseDate>
            <GenresAndDuration>
              {genres.map(genre => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))}
              <Duration>{runtime} mins</Duration>
            </GenresAndDuration>
            <RatingsAverage>
            <Rating name="read-only" max={10} precision={0.1} defaultValue={Math.round(vote_average*10)/10} readOnly size="large"/>
              {vote_average}
            </RatingsAverage>
            <Tagline>{tagline}</Tagline>
            <Overview>{overview}</Overview>
            <ProductionCompanies>
              {production_companies.map(company => (
                <img
                  key={company.id}
                  src={`${baseUrl}${companyLogoSize}${company.logo_path}`}
                  alt={company.name}
                  width={100}
                />
              ))}
            </ProductionCompanies>
          </Description>
        </Details>
      </MovieDetailsSectionContainer>
    );
  }

  return null;
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsMoviesLoaded,
  movie: (state, props) => selectOneMovie(props.match.params.movieId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetailsSection)
);
