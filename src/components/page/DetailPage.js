import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Actors from "../Actors/Actors";
import Videos from "../Videos/Videos";
import {LanguageContext} from "../../context";
import Modal from "./Modal/modal";

const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const {Language} = useContext(LanguageContext)
    const {movieId} = useParams()
    const getDetail = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=${Language}`)
        const {data} = await res
        setDetail(data)
    }
    useEffect(() => {
        getDetail(movieId, APIKEY)
    }, [Language])
const {poster_path, title, overview, release_date, runtime, backdrop_path} = detail
    return (
        <>
            <div id='detail' style={{
                background:  `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`,
                color:"white",
            }}>
                <div className="container">
                    <div className="detail">
                       <Modal detail={detail}/>
                        <div className="detail-desc">
                            <h1 style={{color: "",}}>{title}</h1>
                            <p>{overview}</p>
                            <h3>{release_date}</h3>
                            <h3>{Math.floor(runtime / 60)} h {runtime % 60} min</h3>
                            <div className='detail-vote'>
                                {Math.round(detail.vote_average * 10)}%
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Actors movieId={movieId}/>
            <Videos movieId={movieId}/>
        </>


    );
};

export default DetailPage;