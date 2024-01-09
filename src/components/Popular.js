import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../ApiKey";
import MovieCard from "./page/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const {Language} = useContext(LanguageContext)
    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${Language}&page=${page}`)
        const {data} = await res
        window.scroll(0,0)
        setPopular(data.results)
    }
    const arrayPages = [1,2,3,4,5,6,7,8,9,10]
    useEffect(() => {
        getPopular()
    }, [Language, page])

    return (
        <div id='movies'>
            <div className='container'>
                <div className="movies">
                    {
                        popular.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
                <div className='pagination-btn'>
                    {
                        arrayPages.map(el => (
                            <button style={{
                                background: el === page ? 'red' : ''
                            }} onClick={() => setPage(el)}>{el}</button>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Popular
