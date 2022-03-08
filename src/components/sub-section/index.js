import React from 'react'
import './index.css'
import api from '../../api/imdb_api.js';

export const SubSection = ({movies,header}) => {
    return (
        <div className='trending-section'>
            <h4>{header}</h4>
            <div className='trending-section-content'>
                {
                    movies.map((movie,index)=>{
                        const {title, poster_path, vote_average, release_date} = movie;
                        return(
                            <div className='trending-section-item' key={index}>
                                <img src={api.imageBaseUrl +poster_path} alt={title}/>
                                <p className='movie-title'>{title ?? movie.original_name}</p>
                                <p className='vote-count'>{vote_average} /10</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
