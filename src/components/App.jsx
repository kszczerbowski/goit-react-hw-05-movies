import React, { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
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
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
