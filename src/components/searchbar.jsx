import React, { useState } from "react";

const SearchBar = ({ setUsername, fetchData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setUsername(inputValue);
    fetchData();
  };

  return (
    <>
      <div className="search">
        <div className="searchbox">
          <input
            type="text"
            className="searchinput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Username"
          />
        </div>

        <div className="submit">
          <button className="submitButton" onClick={handleSearch}>
            Submit
          </button>
        </div>
        
      </div>
    </>
  );
};

export default SearchBar;