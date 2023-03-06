import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Reviews = ({ getMovieReviews, movieReviews }) => {
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId);
  }, []);
  return (
    <ul>
      {movieReviews.length ? (
        movieReviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>Sorry, no reviews are available for this movie.</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  getMovieReviews: PropTypes.func,
  movieReviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
