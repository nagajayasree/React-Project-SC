import React from "react";

const SearchBar = ({ value, onChange, classes }) => {
  return (
    <input
      type="text"
      name="query"
      placeholder="Search..."
      className={classes}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      autoComplete="off"
    />
  );
};

export default SearchBar;
