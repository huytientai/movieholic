import React from "react";

import "./search-dropdown.styles.scss";

function goto(id) {
  window.location.href = `/movies/${id}`;
}

const SearchDropdown = (item) => (
  <div class="autocomplete-item" onClick={() => goto(item.id)}>
    {item.title}
  </div>
);

export default SearchDropdown;
