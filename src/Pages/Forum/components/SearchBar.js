import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <>
      <div className="forum_search_area">
        <div className="forum_search_bar">
          <input
            placeholder="搜尋關鍵字"
            type="search"
            name="search"
            id="forum_search"
          />
          <i
            className="fa-solid fa-magnifying-glass bg_main_light_color1"
            id="forum_search_glass"
          ></i>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
