import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api/movies';
import { useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';
import { Loader } from 'components/Loader/Loader';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const location = useLocation();

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
      {status === pageStatus.ERROR && <p>ERROOOOOOR</p>}

      {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
        <Loader />
      )}

      {status === pageStatus.SUCCESS && (
        <List>
          {movies?.map(item => {
            return (
              <MovieItem
                location={location}
                key={item.original_title}
                title={item.original_title}
                url={item.poster_path}
                activeId={item.id}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
