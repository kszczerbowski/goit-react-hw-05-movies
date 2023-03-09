import React, { useEffect, useState } from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  async function getTrendingMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=0943ad551b04628807de14e8fdbef059`
    );
    const moviesArray = response.data.results;
    setTrendingMovies(moviesArray);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      <ul className={css.trendingMoviesList}>
        {!!trendingMovies.length &&
          trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link
                state={{ from: '/' }}
                className={css.movieLink}
                to={`/movies/${movie.id}`}
              >
                <img
                  loading="lazy"
                  className={css.poster}
                  src={
                    !!movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
                  }
                  alt={`Poster of ${movie.title}`}
                />
                <p className={css.movieTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
