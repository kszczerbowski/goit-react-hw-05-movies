import React, { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import axios from 'axios';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const MovieDetails = () => {
  const [actualMovie, setActualMovie] = useState({});
  const location = useLocation();
  const previousLocation = location.state.from;
  const navigate = useNavigate();
  const navigateBack = () => navigate(`${previousLocation}`);
  const { movieId } = useParams();

  async function getMovieDetails(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0943ad551b04628807de14e8fdbef059&language=en-US`
    );
    setActualMovie(response.data);
  }

  useEffect(() => {
    getMovieDetails(movieId);
  }, []);

  return (
    <>
      <button onClick={navigateBack} type="button" className={css.backButton}>
        Take me back!
      </button>
      <section className={css.movieDetails}>
        <div className={css.posterArea}>
          <img
            className={css.poster}
            src={
              !!actualMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${actualMovie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
            }
            alt="movie poster"
          />
        </div>
        <div className={css.info}>
          <h2 className={css.title}>{actualMovie.title}</h2>
          <p className={css.score}>
            User Score: {(actualMovie.vote_average * 10).toFixed(0)}%
          </p>
          <h3 className={css.overviewHeader}>Overview</h3>
          <p className={css.overview}>{actualMovie.overview}</p>
          <h3 className={css.genresHeader}>Genres</h3>
          <p className={css.genres}>
            {actualMovie.genres && !!actualMovie.genres.length
              ? actualMovie.genres.map(record => record.name).join(' ')
              : 'Sorry, no genres were specified for this movie.'}
          </p>
        </div>
        <div className={css.additionalInfo}>
          <p>Additional info</p>
          <ul>
            <li>
              <Link state={{ from: previousLocation }} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link state={{ from: previousLocation }} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
