import axios from 'axios';
const API_KEY = '2996ac4c632c41fce1458614a9485a98';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: { api_key: API_KEY },
  });
  return data;
};

export const getMovieByName = async query => {
  const { data } = await axios.get('/search/movie', {
    params: { api_key: API_KEY, query },
  });
  return data;
};

export const getMovieById = async query => {
  const { data } = await axios.get(`/movie/${query}`, {
    params: { api_key: API_KEY, query },
  });
  return data;
};
//  /movie/{movie_id}

export const getCast = async query => {
  const { data } = await axios.get(`/movie/${query}/credits`, {
    params: { api_key: API_KEY, query },
  });
  return data;
};
//   /movie/{movie_id}/credits