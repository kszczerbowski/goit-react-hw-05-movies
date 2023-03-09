import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const [actualMovieReviews, setActualMovieReviews] = useState([]);
  const { movieId } = useParams();

  async function getMovieReviews(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0943ad551b04628807de14e8fdbef059&language=en-US&page=1`
    );
    const reviewsArray = response.data.results;
    setActualMovieReviews(reviewsArray);
  }

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {actualMovieReviews.length ? (
        actualMovieReviews.map(review => (
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

export default Reviews;
