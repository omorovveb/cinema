import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../ApiKey";
import MovieCard from "./page/MovieCard";
import {LanguageContext} from "../context";

function TopRated(){
    const [topRated, setTopRated] = useState([])
    const {Language} = useContext(LanguageContext)
    const getTopRated = async () => {
        const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${Language}&page=1`)
        const {results} = await response.data
        setTopRated(results)
    }
    useEffect(() => {
        getTopRated()
    }, [Language])
    console.log(topRated)
    return(
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        topRated.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
            </div>

        </div>
    )
}

export default TopRated

// https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1