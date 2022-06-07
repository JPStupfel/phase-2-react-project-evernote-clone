import React from "react";

function Search({setSearchBy}) {

 

  return (
    <div className="filter">
      <input onChange={(event)=>setSearchBy(event.target.value)} id="search-bar" type="text" placeholder="Search Notes" />
    </div>
  );
}

export default Search;
