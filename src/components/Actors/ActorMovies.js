import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";


const ActorMovies = ({actorId}) => {
    const [movies, setMovies] = useState([])
    const getActorMovies = async (id,key) => {
        const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
        setMovies(response.data.cast)
    }
    useEffect(() => {
        getActorMovies(actorId, APIKEY)
    }, [])
    console.log(movies)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 6
    };

    return (
        <Slider {...settings} >
            {
                movies.filter(el => el.poster_path).map(el => (
                    <div key={el.id}>
                        <NavLink to={`/movies/detail-page/${el.id}`}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>

                        </NavLink>
                        <h3>{el.title}</h3>
                    </div>
                ))
            }
        </Slider>
    );
};

export default ActorMovies;