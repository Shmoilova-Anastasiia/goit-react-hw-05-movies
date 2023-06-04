import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TitleMovie, ItemMovie, ImgMovie } from './MovieItem.styled';
import defaultImg from '../../image/Not Found.jpg';

export const MovieItem = ({ url, title, activeId, location }) => {
  return (
    <ItemMovie>
      <Link to={`/movies/${activeId}`} state={{ from: location }}>
        <ImgMovie
          src={
            url !== null ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg
          }
          alt={title}
        />
        <TitleMovie>{title}</TitleMovie>
      </Link>
    </ItemMovie>
  );
};

MovieItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};
