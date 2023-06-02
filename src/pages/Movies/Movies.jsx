import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'Api/movies';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
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

  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchSearchMovies(search, page);
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
  }, [search, page]);

  const handleUpdateSearch = value => {
    setSearchParams({ search: value, page: 1 });
  };

  return (
    <Container>
      <SearchForm onSubmit={handleUpdateSearch} />
      <SearchMovie value={search} movies={movies} status={status} />
    </Container>
  );
};
export default Movies;
