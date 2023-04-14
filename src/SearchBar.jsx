import React, { useState } from "react";

const SearchBar = ({ requestSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    requestSearch(0, searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchBar;
