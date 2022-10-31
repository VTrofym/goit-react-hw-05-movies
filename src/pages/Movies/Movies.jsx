import Form from 'components/Form/Form';
import { getTrending } from 'helpers/filmApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [selectedFilm, setSelectedFilm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!selectedFilm) return;
    const getData = async () => {
      try {
        const response = await getTrending();
        console.log('response', response.results);
        setMovies(response.results);
      } catch (error) {
        console.log('error.message :>> ', error.message);
      }
    };
    getData();
  }, [selectedFilm]);

  const getDataFilm = data => {
    setSelectedFilm(data);
  };

  return (
    <>
      <Form getDataFilm={getDataFilm} />
      {movies && (
        <ul>
          {movies?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
