import React from "react";

import "./search-dropdown.styles.scss";

const SearchDropdown = (item) => (
  <div class="autocomplete-item">{item.title}</div>
);

export default SearchDropdown;
