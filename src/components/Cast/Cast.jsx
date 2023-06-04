import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../Api/movies';
import { Loader } from 'components/Loader/Loader';

import defaultImg from '../../image/Not Found.jpg';
import {
  Image,
  ListCast,
  ItemCast,
  NameCast,
  RoleCast,
  ErrorCast,
} from './Cast.styled';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    const getData = async () => {
      try {
        const data = await fetchMovieCast(id);
        setCast(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      {status === pageStatus.LOADING && <Loader />}

      {status === pageStatus.ERROR && (
        <ErrorCast>ERROR, CAST NOT FOUND</ErrorCast>
      )}

      {status === pageStatus.SUCCESS && cast.length === 0 && (
        <ErrorCast>CAST NOT FOUND</ErrorCast>
      )}

      {status === pageStatus.SUCCESS && (
        <ListCast>
          {cast?.map((item, index) => (
            <ItemCast key={index}>
              <Image
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : defaultImg
                }
                alt=""
              />
              <NameCast>{item.original_name}</NameCast>
              <RoleCast>{item.character ? item.character : 'role'}</RoleCast>
            </ItemCast>
          ))}
        </ListCast>
      )}
    </>
  );
};
export default Cast;
