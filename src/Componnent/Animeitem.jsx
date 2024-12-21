import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const Animeitem = () => {
  const { id } = useParams();

  //state
  const [anime, setAnime] = useState({});
  const [character, setCharater] = useState([]);
  const [show, setShow] = useState(false);

  //destruktur anime
  const {
    title,
    name,
    synopsis,
    images,
    trailer,
    episodes,
    score,
    genres,
    duration,
    source,
    rating,
    status,
    aired,
    scored_by,
    rank,
    popularity,
    season,
  } = anime;

  //get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  //get char in movie
  const getChar = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharater(data.data);
  };
  useEffect(() => {
    getAnime(id);
    getChar(id);
  }, []);
  return (
    <>
      <AnimeitemStyled>
        <h1>{title}</h1>
        <div className="details">
          <div className="detail">
            <div className="image">
              <img src={images?.jpg.large_image_url} alt="" />
            </div>
            <div className="anime-details">
              <p>
                <span>Aired:</span>
                <span>{aired?.string}</span>
              </p>
              <p>
                <span>Rating:</span>
                <span>{rating}</span>
              </p>
              <p>
                <span>Rank:</span>
                <span>{rank}</span>
              </p>
              <p>
                <span>Score:</span>
                <span>{score}</span>
              </p>
              <p>
                <span>Scored_by:</span>
                <span>{scored_by}</span>
              </p>
              <p>
                <span>Popularity:</span>
                <span>{popularity}</span>
              </p>
              <p>
                <span>Status:</span>
                <span>{status}</span>
              </p>
              <p>
                <span>Source:</span>
                <span>{source}</span>
              </p>
              <p>
                <span>Season:</span>
                <span>{season}</span>
              </p>
              <p>
                <span>Duration:</span>
                <span>{duration}</span>
              </p>
            </div>
          </div>
          <p className="description">
            {show ? synopsis : synopsis?.substring(0, 450) + "..."}
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {setShow ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>
        <h3 className="title">Trailer</h3>
        <div className="trailer-container">
          {trailer?.embed_url && (
            <iframe
              src={trailer.embed_url}
              title={title}
              width="700"
              height="450"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        <h3 className="title">Character</h3>
        <div className="characters">
          {character?.map((character, index) => {
            const { role } = character;
            const { images, name, mal_id } = character.character;
            console.log(images);

            return (
              <Link to={`/character/${mal_id}`} key={index}>
                <div className="character">
                  <img src={images?.jpg.image_url} alt="" />
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </AnimeitemStyled>
    </>
  );
};

const AnimeitemStyled = styled.div`
  padding: 2rem 12rem;
  background-color: #ededed;
  h1 {
    
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: skew(-3deg);
    }
  }
  h3.title {
    display: inline-block;
    margin: 3rem 0;
    font-size: 2rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .description {
    margin-top: 2rem;
    color: #6c7983;
    line-height: 1.5rem;
    text-align: justify;
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 0.9rem;
      color: #27ae60;
      font-weight: 600;
    }
  }

  .trailer-container {
    display:flex;
    justify-content: center;
    align-items: center;
    iframe {
      border-radius: 10px;
      background-color: #fff;
      outline:none;
      border: 5px solid #e5e7eb;
      padding:1rem;
    }
  }
  .details {
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid #e5e7eb;
    .detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
      img {
        border-radius: 7px;
      }
    }
    .anime-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        display: flex;
        gap: 1rem;
      }
      p span:first-child {
        font-weight: 600;
        color: #454e56;
      }
    }
  }
  .characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 kolom untuk tata letak yang rapi */
  gap: 1.5rem;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}

.character {
  padding: 0.4rem 0.6rem;
  border-radius: 7px;
  background-color: #ededed;
  text-align: center; /* Memastikan konten di tengah */
  transition: all 0.4s ease-in-out;
}

.character img {
  width: 100%; /* Menyesuaikan lebar ke container */
  height: 200px; /* Menentukan tinggi tetap agar konsisten */
  object-fit: cover; /* Memastikan gambar tidak terdistorsi */
  border-radius: 7px;
}

.character h4 {
  padding: 0.5rem 0;
}

.character p {
  color: #27ae60;
}

.character:hover {
  transform: translateY(-5px);
}

`;
