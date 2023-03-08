import React, { useState, lazy, Suspense } from 'react';
import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  const [actualMovie, setActualMovie] = useState({});
  const [actualMovieCast, setActualMovieCast] = useState([]);
  const [actualMovieReviews, setActualMovieReviews] = useState([]);
  useState(false);
  // eslint-disable-next-line

  async function getMovieDetails(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0943ad551b04628807de14e8fdbef059&language=en-US`
    );
    setActualMovie(response.data);
  }

  async function getMovieReviews(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0943ad551b04628807de14e8fdbef059&language=en-US&page=1`
    );
    const reviewsArray = response.data.results;
    setActualMovieReviews(reviewsArray);
  }

  async function getMovieCast(id) {
    const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=0943ad551b04628807de14e8fdbef059&language=en-US`);
    setActualMovieCast(response.data.cast);
  }

  return (
    <div className={css.container}>
      <Suspense
        fallback={
          <img
            src="https://cdn.dribbble.com/users/77598/screenshots/12570694/media/8eaa19b2448ee8719f559e4d1ec931bc.gif"
            alt="Loading screen..."
          />
        }
      >
        <header className={css.header}>
          <nav className={css.navigation}>
            <NavLink
              className={css.navLink}
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#D2042D' : '#00008b',
              })}
            >
              Home
            </NavLink>
            <NavLink
              className={css.navLink}
              to="/movies"
              style={({ isActive }) => ({
                color: isActive ? '#D2042D' : '#00008b',
              })}
            >
              Movies
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetails
                movie={actualMovie}
                getMovieDetails={getMovieDetails}
              />
            }
          >
            <Route
              path="cast"
              element={
                <Cast getMovieCast={getMovieCast} movieCast={actualMovieCast} />
              }
            />
            <Route
              path="reviews"
              element={
                <Reviews
                  getMovieReviews={getMovieReviews}
                  movieReviews={actualMovieReviews}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
