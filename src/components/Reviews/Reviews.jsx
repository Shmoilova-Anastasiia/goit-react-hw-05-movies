import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api/movies';
import { Loader } from 'components/Loader/Loader';
import {
  ListReviews,
  ItemReviews,
  TitleReviews,
  ErrorReviews,
  TextReviews,
  DateReviews,
} from './Reviews.styled';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(id);
        setReviews(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    };
    getData();
  }, [id]);

  const getPostDate = date => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
    };

    return new Date(date).toLocaleString('en', options);
  };

  return (
    <>
      {status === pageStatus.ERROR && (
        <ErrorReviews>ERROR, REVIEWS NOT FOUND</ErrorReviews>
      )}

      {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
        <Loader />
      )}

      {status === pageStatus.SUCCESS && reviews.length === 0 && (
        <ErrorReviews>REVIEWS NOT FOUND</ErrorReviews>
      )}

      {status === pageStatus.SUCCESS && (
        <ListReviews>
          {reviews?.map(item => (
            <ItemReviews key={item.id}>
              <TitleReviews>{item.author}</TitleReviews>
              <TextReviews>{item.content}</TextReviews>
              <DateReviews>{getPostDate(item.updated_at)}</DateReviews>
            </ItemReviews>
          ))}
        </ListReviews>
      )}
    </>
  );
};
export default Reviews;
