import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'Api/movies';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { Container } from 'pages/HomePage/HomePage.styled';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.INIT);

  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSearchMovies(search);
        setMovies(data);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    };
    if (search) {
      getData();
    } else {
      setMovies([]);
    }
  }, [search]);

  const handleUpdateSearch = value => {
    setSearchParams({ search: value });
  };

  return (
    <Container>
      <SearchForm onSubmit={handleUpdateSearch} />
      {status === Status.SUCCESS && movies.length > 0 && (
        <MovieList movies={movies}  />
      )}
      {status === Status.SUCCESS && movies.length === 0 && (
        <p>Sorry, but nothing was found for {search}! Try again!</p>
      )}
    </Container>
  );
};
export default Movies;
