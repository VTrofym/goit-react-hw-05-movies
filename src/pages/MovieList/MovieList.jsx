import React, { useEffect, useState } from 'react';
import { getTrending } from 'helpers/filmApi';
import { Link } from 'react-router-dom';
import { createImageString } from 'helpers/helpers';
import css from './MovieList.module.css';

export default function MovieList() {
  const [movieItems, setMovieItems] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTrending();
        setMovieItems(response.results);
        console.log('response.result :>> ', response.result);
      } catch (error) {
        console.log('error.message', error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className={css.sectionHome}>
        <div className={css.containerHome}>
          {movieItems && (
            <ul className={css.items}>
              {movieItems.map(item => (
                <li key={item.id} className={css.item}>
                  <Link to={`/movies/${item.id}`}>
                    <img
                      className={css.homeImg}
                      src={createImageString(item.poster_path)}
                      alt="movie"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
