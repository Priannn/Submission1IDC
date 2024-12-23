import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context/global";

export const Galery = () => {
  const { getAnimePicture, pictures } = useGlobalContext();
  const { id } = useParams();

  //state
  const [index, setIndex] = useState(0);
  const handleImageClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    getAnimePicture(id);
  }, [id]);
  return (
    <GalleryStyled>
      <div className="back">
        <i className="fas fa-arrow-left"></i>
        <Link to="/">Back to Homepage</Link>
      </div>
      <div className="big-image">
        <img src={pictures[index]?.jpg.image_url} alt="" />
      </div>
      <div className="small-image">
        {pictures?.map((picture, i) => {
          return (
            <div
              className="image-con"
              onClick={() => handleImageClick(i)}
              key={i}
            >
              <img
                src={picture?.jpg.image_url}
                alt=""
                style={{
                  border: i === index ? "2px solid #eb5757" : "",
                  filter: i === index ? "brightness(1)" : "brightness(0.5)",
                }}
              />
            </div>
          );
        })}
      </div>
    </GalleryStyled>
  );
};
const GalleryStyled = styled.div`
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    gap: 0.5rem;
    color: #eb5757;
    align-items: center;
    a {
      text-decoration: none;
      font-weight: 600;
       color: #eb5757;
    }
  }
  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 7px;
    border: 5pxsolid #e5e7eb;
    position: relative;
    img {
      width: 200px;
    }
  }
  .small-image {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 60%;
    padding: 2rem;
    border-radius: 7px;
    background-color: 7px;
    border: 5px solid #e5e7eb;
    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      border-radius: 7px;
      cursor: pointer;
    }
  }
`;
