import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import NotFound from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
