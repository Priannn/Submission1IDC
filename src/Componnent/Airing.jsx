import React from "react";
import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

export default function Airing({ rendered }) {
  const { airingAnime, isSearch, searchResult } = useGlobalContext();
    const conditionalRendering = () => {
      if (!isSearch && rendered === "airing") {
        return airingAnime?.length ? (
          airingAnime.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </Link>
          ))    
        ) : (
          <p>Loading Airing Anime...</p>
        );
      } else {
        return searchResult?.length ? (
          searchResult.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </Link>
          ))
        ) : (
          <p>Loading search results...</p>
        );
      }
    };

  return (
    <>
      <PopularStyled>
        <div className="airing-anime">{conditionalRendering()}</div>
        <Sidebar/>
      </PopularStyled>
    </>
  );
}
const PopularStyled = styled.div`
  display: flex;
  .airing-anime {
    display: flex;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }
    a img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 7px;
    }
  }
`;
