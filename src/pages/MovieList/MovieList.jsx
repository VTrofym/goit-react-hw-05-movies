import React, { useEffect, useState } from 'react';
import { trendingMovies } from 'helpers/filmApi';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [movieItems, setMovieItems] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await trendingMovies();
        // console.log('response.results', response.results);
        setMovieItems(response.results);
      } catch (error) {
        console.log('error.message', error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      {movieItems && (
        <ul>
          {movieItems.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
