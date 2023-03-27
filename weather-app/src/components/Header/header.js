import React, { useEffect, useState } from "react";

import "./header.css";

const Header = (props) => {
  const { setLocation, searchCity, smoothScroll, homeRef, citiesRef, newsRef } =
    props;

  return (
    <div className="headContaier">
      <div className="input">
        <input
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="Search City"
        />
        <button onClick={searchCity}>search</button>
      </div>

      <div className="headComponents">
        <div className="home" onClick={()=>smoothScroll(homeRef)}>Home</div>
        <div className="city" onClick={()=>smoothScroll(citiesRef)}>
          Cities
        </div>
        <div className="news" onClick={()=>smoothScroll(newsRef)}>News</div>
      </div>
    </div>
  );
};

export default Header;
