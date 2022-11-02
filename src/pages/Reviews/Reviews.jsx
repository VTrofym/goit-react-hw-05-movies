import { getReviews } from 'helpers/filmApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsDetails = async () => {
      const reviewsData = await getReviews(movieId);
      setReviews(reviewsData.results);
    };
    getReviewsDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Reviews</h2>
      {reviews?.map(item => (
        <li className={css.item} key={item.id}>
          <p>Author: {item.author}</p>
          <p>Content: {item.content}</p>
        </li>
      ))}
    </>
  );
}
