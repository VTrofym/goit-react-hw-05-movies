import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '3c137c4d293c8ccacc79a0998fff8ad4';

export const getFilmFromApi = async (url = '') => {
  const { data } = await axios.get(url)
  return data
};

export const moviesTrending = () => {
  return getFilmFromApi(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`);
}

