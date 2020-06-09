import React from 'react';
import { InputBase } from '@material-ui/core';

import { Search } from '@material-ui/icons';
import { useStyles } from './search-box.styles';

export default function SearchBox() {
  const classes = useStyles();

  return (
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
      />
    </div>
  );
}
