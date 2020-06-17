import React from 'react';
import { useHistory } from 'react-router-dom';

import './search-dropdown.styles.scss';

const SearchDropdown = ({ id, title, onSelect }) => {
  const history = useHistory();

  return (
    <div
      className='autocomplete-item'
      onClick={() => {
        history.push(`/movies/${id}`);
        onSelect();
      }}
    >
      {title}
    </div>
  );
};

export default SearchDropdown;
