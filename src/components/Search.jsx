import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
const Search = () => {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search" />
        <FaSearch name="search-outline" className="icon" />
      </div>
    </>
  );
};

export default Search;
