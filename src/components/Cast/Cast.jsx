/* eslint-disable react-hooks/exhaustive-deps */
import { getCast } from 'helpers/filmApi';
import { createImageString } from 'helpers/helpers';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <ul>
          {cast?.map(item => (
            <li key={item.id}>
              <img src={createImageString(item.profile_path)} alt="actor" />
              <p>Name: {item.original_name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
