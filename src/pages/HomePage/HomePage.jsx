import { Container, PageTitle } from './HomePage.styled';

import { fetchTrendingMovies } from 'Api/movies';
import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  useEffect(() => {
    setStatus(pageStatus.LOADING);

    async function getData() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
        setStatus(pageStatus.SUCCESS);
      } catch {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Container>
        <PageTitle>Trending Movies</PageTitle>
        {status === pageStatus.ERROR && <p>ERROOOOOOR</p>}
        {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
          <Loader />
        )}

        {status === pageStatus.SUCCESS && <MovieList movies={movies} />}
      </Container>
    </>
  );
};
export default HomePage;
