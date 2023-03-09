import React, { useEffect, useState, useCallback } from 'react';
import css from './Movies.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [shouldLoadFromParams, setShouldLoadFromParams] = useState(true);
  const paramsQuery = searchParams.get('query');

  const getSearchedMovies = useCallback(async query => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0943ad551b04628807de14e8fdbef059&language=en-US&query=${query}&page=1&include_adult=false`
    );
    setSearchedMovies(response.data.results);
    setSearchParams({ query: query });
  });

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.movieName.value;
    getSearchedMovies(query);
    event.target.elements.movieName.value = '';
    setShouldLoadFromParams(false);
  }

  useEffect(() => {
    if (paramsQuery !== null && shouldLoadFromParams)
      getSearchedMovies(paramsQuery);
    setShouldLoadFromParams(false);
  }, [paramsQuery, getSearchedMovies, shouldLoadFromParams]);

  return (
    <>
      <form onSubmit={handleSubmit} className={css.moviesForm}>
        <input className={css.searchInput} name="movieName" />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
      {!!paramsQuery && !searchedMovies.length ? (
        <p>Sorry, we don't have any movies matching the search criteria.</p>
      ) : (
        <ul className={css.searchedMoviesList}>
          {searchedMovies.map(movie => (
            <li key={movie.id}>
              <Link
                state={{ from: `/movies?query=${paramsQuery}` }}
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
      )}
    </>
  );
};

export default Movies;
