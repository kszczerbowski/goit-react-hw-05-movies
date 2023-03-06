import React, { useEffect } from 'react';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cast = ({ getMovieCast, movieCast }) => {
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCast(movieId);
  // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {movieCast &&
        movieCast.map(person => (
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

Cast.propTypes = {
  getMovieCast: PropTypes.func,
  movieCast: PropTypes.arrayOf(PropTypes.object),
};

export default Cast;