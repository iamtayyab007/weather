import React from "react";

export const Search = ({ search, setSearch, handleSubmit }) => {
  return (
    <>
      <div className="search-container">
        <div className="input-fields">
          <input
            type="text"
            placeholder="enter the city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </>
  );
};
