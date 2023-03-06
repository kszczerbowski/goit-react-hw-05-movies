import React, { useEffect } from 'react';
import css from './MovieDetails.module.css';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieDetails = ({ getMovieDetails, movie }) => {
  const location = useLocation();
  const previousLocation = location.state.from;
  const navigate = useNavigate();
  const navigateBack = () => navigate(`${previousLocation}`);

  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId);
    // eslint-disable-next-line
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
              !!movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
            }
            alt="movie poster"
          />
        </div>
        <div className={css.info}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.score}>
            User Score: {(movie.vote_average * 10).toFixed(0)}%
          </p>
          <h3 className={css.overviewHeader}>Overview</h3>
          <p className={css.overview}>{movie.overview}</p>
          <h3 className={css.genresHeader}>Genres</h3>
          <p className={css.genres}>
            {movie.genres && movie.genres.map(record => record.name).join(' ')}
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

MovieDetails.propTypes = {
  getMovieDetails: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieDetails;
