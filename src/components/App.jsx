import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails/MoviesDetails'));
const Error404 = lazy(() => import('pages/Error404'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviewes = lazy(() => import('./Reviewes/Reviewes'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviewes" element={<Reviewes />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};
