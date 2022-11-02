import { Suspense } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Home } from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies';
import NotFound from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
