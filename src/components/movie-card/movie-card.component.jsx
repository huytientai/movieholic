import React from 'react';
import { useHistory } from 'react-router-dom';

import { baseUrl } from '../../data/movie.urls';

import './movie-card.styles.scss';

const MovieCard = ({ id, poster_path, title, release_date }) => {
  const history = useHistory();

  const posterSize = '/w200'; // 200px

  return (
    <div className='movie-card' onClick={() => history.push(`/movies/${id}`)}>
      <img src={`${baseUrl}${posterSize}${poster_path}`} alt='movie-poster' />
      <span className='title'>
        {title.length < 20 ? title : title.slice(0, 20) + '...'}
      </span>
      <span className='release-date'>{release_date.slice(0, 4)}</span>
    </div>
  );
};

export default MovieCard;
