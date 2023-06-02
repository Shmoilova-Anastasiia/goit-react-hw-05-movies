import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieItem } from 'components/MovieItem/MovieItem';
import { SearchList } from './SearchMovie.styled';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const SearchMovie = ({ value, status, movies }) => {
  const location = useLocation();

  return (
    <>
      {status === Status.SUCCESS && movies.length > 0 && (
        <SearchList>
          {movies?.map(item => {
            return (
              <MovieItem
                location={location}
                key={item.id}
                title={item.original_title}
                url={item.poster_path}
                activeId={item.id}
              />
            );
          })}
        </SearchList>
      )}
      {status === Status.SUCCESS && movies.length === 0 && (
        <p>text={`Sorry, but nothing was found for "${value}"! try again!`}</p>
      )}
    </>
  );
};

SearchMovie.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
