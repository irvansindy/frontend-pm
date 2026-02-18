import { useState } from "react";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search for:", searchQuery);
      // TODO: Implement actual search functionality
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <button
            type="button"
            className="search-clear"
            onClick={handleClearSearch}
            title="Clear search"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>
    </div>
  );
}
