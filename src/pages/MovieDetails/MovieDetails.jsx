/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { getMovieById } from 'helpers/filmApi';
import { Link, Outlet, useParams } from 'react-router-dom';
import { createImageString } from 'helpers/helpers';
import css from './MovieDetails.module.css';
import Button from 'components/Button';

export default function MovieDetails() {
  const [nameFilm, setNameFilm] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getNameFilm = async () => {
      const nameFilmData = await getMovieById(movieId);
      setNameFilm(nameFilmData);
    };
    getNameFilm();
  }, []);

  return (
    <>
      <section className={css.sectionHome}>
        <div className={css.containerHome}>
          <Button />
          {/* <button>Go back</button> */}
          {/* <Link to={location.state?.from ?? '/'}>Go back</Link> */}
          <img
            className={css.foto}
            src={createImageString(nameFilm.poster_path)}
            // src={`https://image.tmdb.org/t/p/w500${nameFilm.poster_path}`}
            alt=""
          />
          <h2 className={css.title}>{nameFilm.original_title}</h2>
          <h3>Overview</h3>
          <p className={css.overview}>{nameFilm.overview}</p>
          <h4 className={css.genres}>Genres</h4>
          <p className={css.gengerItems}>
            {nameFilm?.genres?.map(item => item.name).join(' ')}
          </p>
          <div className={css.castRewiew}>
            <Link className={css.cast} to="cast">
              Cast
            </Link>
            <Link className={css.reviews} to="reviews">
              Reviews
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </>
  );
}
