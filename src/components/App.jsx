import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const Movies = lazy(() => import('pages/Movies/Movies'));

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <main>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  );
};
