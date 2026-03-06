import React from 'react';

const MovieCard = (
    {movie : {title, original_language ,poster_path, release_date, vote_average}}
) => {
    return (
        <div className='movie-card'>
            <img src={poster_path?`http://image.tmdb.org/t/p/w500${poster_path}`:'./no-movie.png'} alt='poster'/>
            <h3 className='mt-4'>
                {title}
            </h3>
            <div className='content'>
                <div className='rating'>
                    <img src='./star.svg' alt='star icon'/>
                    <p>{vote_average?vote_average.toFixed(1):'N/A'}</p>
                </div>
                <span>•</span>
                <p className='lang'>{original_language}</p>
                <span>•</span>
                <p className='year'>{release_date?release_date.split('-')[0]:'N/A'}</p>

            </div>
        </div>
    );
};

export default MovieCard;