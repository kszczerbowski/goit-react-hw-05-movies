import React, { useEffect, useState } from 'react';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const [actualMovieCast, setActualMovieCast] = useState([]);
  const { movieId } = useParams();

  async function getMovieCast(id) {
    const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=0943ad551b04628807de14e8fdbef059&language=en-US`);
    setActualMovieCast(response.data.cast);
  }

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {actualMovieCast &&
        actualMovieCast.map(person => (
          <li key={person.cast_id}>
            <img
              loading="lazy"
              className={css.actorPhoto}
              src={
                !!person.profile_path
                  ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`
              }
              alt={`${person.name}`}
            />
            <p>{person.name}</p>
            <p>Character: {person.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
