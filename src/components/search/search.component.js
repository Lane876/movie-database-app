import React from "react";
import "./search.style.scss";

const Search = ({ handleInput, search }) => {
  return (
    <section className="searchBox-wrap">
      <input
        type="search"
        placeholder="Search for a movie..."
        className="searchBox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
};

export default Search;
