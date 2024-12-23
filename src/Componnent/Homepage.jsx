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
        <h1 className="headerr">Adpnime</h1>

        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              {" "}
              Popular <i className="fas fa-fire"></i>
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
              <button type="submit">Search</button>
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
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
      </header>
      {switchComponent()}
    </HomepageStyled>
  );
};

const HomepageStyled = styled.div`
    background-color:#FCC737;
    color:#1C325B;
   
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all 0.4s ease-in-out;
        .logo{
            display:flex;
            align-items: center;
            justify-content: center;
            margin-bottom:2rem;
        }
             .headerr {
        text-align: center; /* Memastikan teks berada di tengah */
        font-size: 2.5rem;
    }
        .search-container{
            display:flex;
            align-items: center;
            justify-content: center;
            margin-bottom:1rem;
            margin-top:1rem;
            gap: 1rem;
            button{
                display:flex;
                align-items:center;
                gap:.5rem;
                padding:.7rem 1rem;
                outline:none;
                border-radius: 30px;
                font-size:1rem;
                background-color:#fff; 
                cursor:pointer;
                transition: all 0.4s ease-in-out;
                font-family: 'Nunito', sans-serif;
                border: 5px solid #e5e7eb;
            }
            form {
                position: relative;
                width: 100%;
                .input-control {
                    position: relative;
                    transition: all 0.4s ease-in-out;
                }
                .input-control input{ 
                    width: 400px;
                    padding:1rem 1rem;
                    border:none;
                    outline:none;
                    border-radius:30px;
                    font-size:1rem;
                    background-color: #fff;
                    transition: all 0.4s ease-in-out;
                    border: 5px solid #e5e7eb;
                }
                .input-control button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform:translateY(-50%);
                }
            }
        }
`;
export default Homepage;
