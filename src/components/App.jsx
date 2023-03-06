import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';
import axios from 'axios';

// mój api key: 0943ad551b04628807de14e8fdbef059
// example API request: https://api.themoviedb.org/3/movie/550?api_key=0943ad551b04628807de14e8fdbef059
// API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQzYWQ1NTFiMDQ2Mjg4MDdkZTE0ZThmZGJlZjA1OSIsInN1YiI6IjY0MDIzYmNiODhiMTQ4MDBkNjdmYTkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yp2vSjQphZCJtTeMHJWZrUaH6Hg28R_oEYL06vtwdOo

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actualMovie, setActualMovie] = useState({});
  const [actualMovieCast, setActualMovieCast] = useState([]);
  const [actualMovieReviews, setActualMovieReviews] = useState([]);

  async function getTrendingMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=0943ad551b04628807de14e8fdbef059`
    );
    const moviesArray = response.data.results;
    console.log('trending movies in App: ', moviesArray);
    setTrendingMovies(moviesArray);
  }

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
    setActualMovieReviews(reviewsArray)
  }

  async function getMovieCast(id) {
    const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=0943ad551b04628807de14e8fdbef059&language=en-US`);
    setActualMovieCast(response.data.cast)
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
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
        <Route path="/" element={<Home trendingMovies={trendingMovies} />} />
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
          <Route path="cast" element={<Cast getMovieCast={getMovieCast} movieCast={actualMovieCast} />} />
          <Route path="reviews"   element={<Reviews getMovieReviews={getMovieReviews} movieReviews={actualMovieReviews}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
