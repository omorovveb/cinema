import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import Profile from '../../img/person.jpg'
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";


const Actors = ({movieId}) => {

    const [actors, setActors] = useState([])
    const getCredits = async (id, apiKey, lang) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
        const {data} = res
        setActors(data.cast)
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };
    useEffect(() => {
        getCredits(movieId, APIKEY)
    },[])
    return (
       <div id='actors'>
           <div className='container'>
               <Slider {...settings}>
                   {
                       actors.map(el => (

                          <Link key={el.id} to={`/actors/detail-page/${el.id}`}>
                              <div  className='actors-card'>
                                  {
                                      el.profile_path ?
                                          <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                          :
                                          <img width={150} height={175} src={Profile} alt=""/>
                                  }
                                  <h2>{el.name}</h2>
                                  <p>{el.character}</p>
                              </div>
                          </Link>
                       ))
                   }
               </Slider>
           </div>
       </div>
    );
};

export default Actors;


