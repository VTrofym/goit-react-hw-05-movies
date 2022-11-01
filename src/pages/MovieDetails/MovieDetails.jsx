/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieById } from 'helpers/filmApi';
import { Link, Outlet, useParams } from 'react-router-dom';
import { createImageString } from 'helpers/helpers';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [nameFilm, setNameFilm] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getNameFilm = async () => {
      const nameFilmData = await getMovieById(movieId);
      console.log('nameFilmData', nameFilmData);
      setNameFilm(nameFilmData);
    };
    getNameFilm();
  }, []);

  return (
    <>
      <section className={css.sectionHome}>
        <div className={css.containerHome}>
          <img
            src={createImageString(nameFilm.poster_path)}
            // src={`https://image.tmdb.org/t/p/w500${nameFilm.poster_path}`}
            alt=""
          />
          <h2>{nameFilm.original_title}</h2>
          <h3>Overview</h3>
          <p>{nameFilm.overview}</p>
          <h4>Genres</h4>
          <p>{nameFilm?.genres?.map(item => item.name).join(' ')}</p>
          <div className={css.castRewiew}>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
