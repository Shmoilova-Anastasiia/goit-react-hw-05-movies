import React from 'react';

import { useLocation } from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};
