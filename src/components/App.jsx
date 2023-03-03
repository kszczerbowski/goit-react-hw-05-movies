import React from 'react';
import css from './App.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import {NotFound} from '../pages/NotFound/NotFound'
import {Home} from '../pages/Home/Home'
import {Movies} from '../pages/Movies/Movies'

// mój api key: 0943ad551b04628807de14e8fdbef059
// example API request: https://api.themoviedb.org/3/movie/550?api_key=0943ad551b04628807de14e8fdbef059
// API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTQzYWQ1NTFiMDQ2Mjg4MDdkZTE0ZThmZGJlZjA1OSIsInN1YiI6IjY0MDIzYmNiODhiMTQ4MDBkNjdmYTkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yp2vSjQphZCJtTeMHJWZrUaH6Hg28R_oEYL06vtwdOo

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
