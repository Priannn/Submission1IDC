import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Animeitem = () => {
    const {id} = useParams();

    //state
    const [anime, setAnime] = useState({});
    const [character, setCharater] = useState({});
    const [show, setShow] = useState(false);


    //destruktur anime
    const {title, synopsis, images, trailer, episodes, score, genres, duration, source, rating, status, aired,scored_by} = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        getAnime(id)
    },[])
  return (
    <div>
        <h1>{title}</h1>
        <div className="details">
            <div className="detail">
                <div className="image">
                    <img src={images?.jpg.large_image_url} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
