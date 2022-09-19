import React from "react";

const Search = ({ query, onHandleChange }) => {
  return (
    <div className="container Form">
      <p className="Search">search news</p>
      <form onSubmit={(e) => e.preventDefault()} className="mt-5">
        <input
          type="text"
          value={query}
          name="search"
          onChange={onHandleChange}
          className="Form__input"
        />
      </form>
    </div>
  );
};

export default Search;
