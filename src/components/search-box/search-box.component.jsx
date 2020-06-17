import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMoviesStart } from '../../redux/movie/movie.actions';
import {
  selectIsMoviesLoaded,
  selectMoviesForPreview
} from '../../redux/movie/movie.selectors';

import SearchDropdown from '../search-dropdown/search-dropdown.component';

import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useStyles } from './search-box.styles';
import './search-box.styles.scss';

const SearchBox = ({ isLoaded, movies, fetchMoviesStart }) => {
  useEffect(() => {
    if (!isLoaded) fetchMoviesStart();
  });

  const classes = useStyles();

  const [input, setInput] = useState('');
  const [isShowed, setIsShowed] = useState(false);

  const wrapperRef = useRef(null);

  const handleChange = event => {
    setInput(event.target.value);
    setIsShowed(true);
  };

  const useOutside = ref => {
    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShowed(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutside(wrapperRef);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div ref={wrapperRef}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder='Search movies here…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          value={input}
        />
        <div className={classes.dropdownLists}>
          {isShowed && input.length !== 0
            ? filteredMovies.map((filteredMovie, index) => (
                <SearchDropdown
                  className={classes.inputRoot}
                  key={index}
                  {...filteredMovie}
                  onSelect={() => {
                    setIsShowed(false);
                    setInput('');
                  }}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsMoviesLoaded,
  movies: selectMoviesForPreview
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
