import { Suspense, useRef, useEffect, useState } from 'react';
import { fetchMovieDetails } from 'Api/movies';
import { Container } from 'pages/HomePage/HomePage.styled';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  Back,
  InfoBox,
  ImageBox,
  Image,
  InfoText,
  Caption,
  Title,
  Text,
  List,
  LinkList,
  LinkItem,
  LinkMov,
} from './MovieDetails.styled';
import defaultImg from '../../image/Not Found.jpg';

const MovieDetails = () => {
  // const activeClassName = ({ isActive }) =>
  //   isActive ? `${LinkActive}` : `${LinkMov}`;

  const location = useLocation();

  const [film, setFilm] = useState([]);

  const params = useParams();
  const id = params?.movieId;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setFilm(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [id]);

  return (
    <Container>
      <Link to={useRef(location.state?.from ?? '/').current}>
        <Back>Back</Back>
      </Link>
      <InfoBox>
        <ImageBox>
          <Image
            src={
              film?.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : defaultImg
            }
            alt=""
          />
        </ImageBox>

        <InfoText>
          <Caption>{film.original_title}</Caption>
          <Title>Release date</Title>
          <Text>
            {film.release_date ? film.release_date : 'No data available'}
          </Text>
          <Title>Rating</Title>
          <Text>{film.vote_average}</Text>
          <Title>Genres</Title>
          <List>
            {film?.genres?.length === 0 ? (
              <Text>No data available</Text>
            ) : (
              film?.genres?.map(item => (
                <li key={item.name}>
                  <Text>{item.name}</Text>
                </li>
              ))
            )}
          </List>
          <Title>Overview</Title>
          <Text>{film.overview ? film.overview : 'No data available'}</Text>
        </InfoText>
      </InfoBox>
      <div>
        <LinkList>
          <LinkItem>
            <NavLink
              to="cast"
              // className={activeClassName}
              state={{ from: location }}
            >
              <LinkMov>cast</LinkMov>
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink
              to="reviews"
              // className={activeClassName}
              state={location?.state ?? '/'}
            >
              <LinkMov>reviews</LinkMov>
            </NavLink>
          </LinkItem>
        </LinkList>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
