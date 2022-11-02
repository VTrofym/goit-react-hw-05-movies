/* eslint-disable react-hooks/exhaustive-deps */
import { getCast } from 'helpers/filmApi';
import { createImageString } from 'helpers/helpers';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastActors = async () => {
      const castData = await getCast(movieId);
      setCast(castData.cast);
    };
    getCastActors();
  }, []);

  return (
    <>
      <h2>Cast</h2>
      {cast && (
        <ul className={css.items}>
          {cast?.map(item => (
            <li className={css.item} key={item.id}>
              <img
                className={css.foto}
                src={createImageString(item.profile_path)}
                alt="actor"
              />
              <p className={css.name}>Name: {item.original_name}</p>
              <p className={css.character}>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
