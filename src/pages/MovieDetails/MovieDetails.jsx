import React, { useEffect } from "react";
import css from './MovieDetails.module.css'
import { Link, Outlet, useParams } from "react-router-dom";

export const MovieDetails = ({getMovieDetails,movie}) => {
    const { movieId } = useParams()
    // console.log(`movieId to ${movieId}`)
    useEffect(()=>{
        getMovieDetails(movieId)
    // console.log(movie)
        // console.log(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
},[])

    // getMovieDetails(movieId)


    return <section className={css.movieDetails}>
        <div className={css.posterArea}><img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster'/></div>
        <div className={css.info}>
            {/* <h2 className={css.title}>The King (2019)</h2>
            <p className={css.score}>User Score: 74%</p>
            <h3 className={css.overviewHeader}>Overview</h3>
            <p className={css.overview}>England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.</p>
            <h3 className={css.genresHeader}>Genres</h3>
            <p className={css.genres}>Drama History War</p> */}
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.score}>User Score: {(movie.vote_average*10).toFixed(0)}%</p>
            <h3 className={css.overviewHeader}>Overview</h3>
            <p className={css.overview}>{movie.overview}</p>
            <h3 className={css.genresHeader}>Genres</h3>
            <p className={css.genres}>{movie.genres && movie.genres.map(record=>record.name).join(' ')}</p>
        </div>
        <div className={css.additionalInfo}>
            <p>Additional info</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet />
        </div>
    </section>
}

