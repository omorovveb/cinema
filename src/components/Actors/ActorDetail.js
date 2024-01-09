import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../ApiKey";
// import Slider from "react-slick";
import ActorMovies from "./ActorMovies";
import {LanguageContext} from "../../context";

const ActorDetail = () => {
    const [actor, setActor] = useState({})
    const {Language} = useContext(LanguageContext)
    const [viewMore, setViewMore] = useState(300)
    const {actorId} = useParams()
    const getDetailActor = async (id, key) => {
        const response = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${Language}`)
        setActor(response.data)
    }
    const printText = (text) => {
        if (viewMore === 300){
            setViewMore(text.length)
        }else{
            setViewMore(300)
        }
    }
    useEffect(() => {
        getDetailActor(actorId, APIKEY)
    }, )
    return (
        <div id='actor-detail'>
            <div className='container'>
                <div className='actor-detail'>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} alt=""/>
                    <div className='actor-detail--titles'>
                        <h1>{actor.name}</h1>
                        <h3>{actor.birthday}</h3>
                        <h4>Биография</h4>
                        <p>{actor.biography && actor.biography.slice(0, viewMore)}</p>
                        {
                            actor.biography &&actor.biography.length > 300 &&
                            <span
                                onClick={() => printText(actor.biography)}
                                className='view-more'
                            >{viewMore === 300 ? 'view more'
                                : 'close'}</span>
                        }
                    </div>
                </div>
                <div>
                    <ActorMovies actorId={actorId}/>
                </div>
            </div>
        </div>
    );
};

export default ActorDetail;

//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US