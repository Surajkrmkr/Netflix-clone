import Header from '../header/index.js';
import { TopSection } from '../top-section/index.js';
import React, { useEffect, useState } from 'react'
import api from '../../api/imdb_api.js';
import { SubSection } from '../sub-section/index.js';
import './index.css'


export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTvShows, setPopularTvShows] = useState([]);
    // const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        fetchTrendingMovies();
        fetchPopularTvShows();
        fetchPopularMovie();
    }

    const fetchTrendingMovies = () => {
        fetch(api.trendingApi)
            .then(response => response.json())
            .then(data => {
                setTrendingMovies(data.results);
            })
    }

    const fetchPopularMovie = () => {
        fetch(api.popularApi)
            .then(response => response.json())
            .then(data => {
                setPopularMovies(data.results);
            })
    }

    const fetchPopularTvShows = () => {
        fetch(api.tvseasonApi)
            .then(response => response.json())
            .then(data => {
                setPopularTvShows(data.results);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (trendingMovies.length === 0 || popularMovies.length === 0 || popularTvShows.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        return (
            <>
                <Header />
                <TopSection topMovie={trendingMovies[Math.floor(Math.random() * trendingMovies.length - 1)]} />
                <div className='content'>
                    <SubSection movies={trendingMovies} header="Trending Now"/>
                    <SubSection movies={popularMovies} header="Popular Shows"/>
                    <SubSection movies={popularTvShows} header="TV Shows"/>
                </div>
            </>
        )
    }
}
