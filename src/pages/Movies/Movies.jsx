import Form from 'components/Form/Form';
import { moviesSearch } from 'helpers/filmApi';
import { useEffect } from 'react';
import { useState } from 'react';

export const Movies = () => {
  const [selectedFilm, setSelectedFilm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!selectedFilm) return;
    const getData = async () => {
      try {
        const response = await moviesSearch();
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
    </>
  );
};
