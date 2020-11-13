import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        onChange={(e) => props.filterNotes(e.target.value)}
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
