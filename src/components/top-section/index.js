import React from 'react'
import api from '../../api/imdb_api.js';
import './index.css';
import { MdPlayArrow, MdInfoOutline } from "react-icons/md";

export const TopSection = (topMovie) => {
    const { title = 'Netflix', backdrop_path, overview } = topMovie.topMovie;
    return (
        <div className='top-section'>
            <div className='img-overlay'><img className='top-movie-poster' src={api.imageBaseUrl + backdrop_path} alt="logo" /></div>
            <div className='top-movie-details'>
                <h1>{title ?? `Netflix Series`}</h1>
                <p>{overview}</p>
                <div className="buttons-container">
                    <button className="play-btn">
                        <MdPlayArrow className='play-btn-icon' />Play
                    </button>
                    <button className="info-btn">
                        <MdInfoOutline className='info-btn-icon' />More Info
                    </button>
                </div>
            </div >
        </div>
    )
}

