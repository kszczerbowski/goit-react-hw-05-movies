import React, { useEffect } from "react";
import css from './Reviews.module.css'
import { useParams } from "react-router-dom";

export const Reviews = ({getMovieReviews, movieReviews}) => {
    const { movieId } = useParams()
    useEffect(()=>{
        getMovieReviews(movieId)
    },[])
    return <ul>
        {movieReviews ? movieReviews.map(review => <li key={review.id}><p>{review.author}</p><p>{review.content}</p></li>) : <p>Sorry, no reviews are available for this movie.</p>}
    </ul>
}