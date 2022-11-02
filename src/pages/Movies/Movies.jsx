import Form from 'components/Form/Form';
import { getMovieByName } from 'helpers/filmApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async (query, page = 1) => {
      const data = await getMovieByName(query, page);
      console.log(data.results);
      setMovies(data.results);
    };
    if (page > 1 && query) {
      getData(query, page);
    } else if (query) {
      getData(query);
    }
  }, [query, page]);

  const getFormData = data => {
    setSearchParams({ query: data });
  };

  return (
    <>
      <Form getDataFilm={getFormData} />
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
