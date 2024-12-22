import React, { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../Context/global";
import styled from "styled-components";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const Homepage = () => {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpComing,
    getAiring,
    getPopularAnime,
  } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <HomepageStyled>
      <header>
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular
            </button>
          </div>
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime.."
                value={search}
                onChange={handleChange}
              />
              <button type="submit" >
                Search
              </button>
            </div>
            
          </form>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiring();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpComing();
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </HomepageStyled>
  );
};

// const HomepageStyled = styled.div`
  
// `;
export default Homepage;
