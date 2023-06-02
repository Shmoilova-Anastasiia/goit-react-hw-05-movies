import { Container, PageTitle } from './HomePage.styled';

import { MovieList } from 'components/MovieList/MovieList';

const HomePage = () => {
  return (
    <>
      <Container>
        <PageTitle>Trending Movies</PageTitle>
        <MovieList />
      </Container>
    </>
  );
};
export default HomePage;
