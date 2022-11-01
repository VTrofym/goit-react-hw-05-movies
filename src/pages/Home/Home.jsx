import MovieList from '../MovieList/MovieList';
import css from './Home.module.css';

export const Home = () => {
  return (
    <>
      <h2 className={css.trendingToday}>Trending today</h2>
      <MovieList />
    </>
  );
};
