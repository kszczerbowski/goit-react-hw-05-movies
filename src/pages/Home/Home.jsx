import React, { useEffect } from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = ({trendingMovies}) => {
    console.log(trendingMovies)
//     const abc = [...trendingMovies]
//     console.log('abc: ',abc)
// const trendingMoviesArray = [...trendingMovies]
// console.log('Trending movies in home: ', trendingMoviesArray)
// console.log('Trending movies in home2: ', trendingMovies)
// console.log(`Trending movies in home: ${trendingMovies}`)
  return (
    <>
      <ul className={css.trendingMoviesList}>
        {trendingMovies.length && trendingMovies.map(movie=><li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
      </ul>
    </>
  );
};
