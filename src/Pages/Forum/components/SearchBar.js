import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <>
      <div className="search_area">
        <div className="forum_search_bar">
          <input
            placeholder="搜尋關鍵字"
            type="search"
            name="search"
            id="search"
          />
          <i
            className="fa-solid fa-magnifying-glass bg_main_light_color1"
            id="pro_search"
          ></i>
        </div>

        <div className="forum_select_bar">
          <select id="select" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
