import React, { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Loading } from './Loading/Loading';
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
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
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loading />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<Loading />}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loading />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loading />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
