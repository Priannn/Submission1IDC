import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const { popularAnime } = useGlobalContext();
  const sortAnime = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });
  return (
    <SidebarStyled>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sortAnime.slice(0, 5).map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <h5>{anime.title}</h5>
            </Link>
          );
        })}
      </div>
    </SidebarStyled>
  );
};
const SidebarStyled = styled.div`
  margin-top: 2rem;

  padding-top: 2rem;
  padding-right: 4rem;
  padding-left: 4rem;
  background-color: #fff;
  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  a {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #27ae60;
    h4 {
      font-size: 1rem;
    }
  }
`;
