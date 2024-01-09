import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey";
import {useParams} from "react-router-dom";
import MovieCard from "../components/page/MovieCard";

const SearchResult = () => {
    const [result, setResult] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    const {movieName} = useParams()
    const getResult = async (key, name) => {
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=en-US&page=${page}`)
        window.scroll(0,0)
        setTotalPage(response.data.total_pages)
        setResult(response.data.results)
    }
    useEffect(() => {
        getResult(APIKEY, movieName)
    },[movieName, page])
    useEffect(() => {
        setPage(1)
    },[movieName])
    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        result.map(el => <MovieCard el={el} key={el.id}/>)
                    }
                </div>
                <div className='buttons'>
                    <button style={{
                        visibility: page === 1 ? "hidden" : 'visible'
                    }} onClick={() => setPage(page - 1)}>prev</button>
                    <h3 style={{color: "white"}}>{page} / {totalPage}</h3>
                    <button style={{
                        visibility: page === totalPage ? 'hidden' : "visible"
                    }} onClick={() => setPage(page + 1)}>next</button>
                </div>
            </div>

        </div>
    );
};

export default SearchResult;
