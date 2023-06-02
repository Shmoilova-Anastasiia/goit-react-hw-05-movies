import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `80849c20aa63241eb028c4e7b7d0f3a8`,
  include_adult: false,
};
export const fetchTrendingMovies = async (page = 1, lng) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
        language: ' en - US',
      },
    });
    return data.results;
  } catch (error) {
    alert('Oops, there is no movies');
  }
};

export const fetchSearchMovies = async (query = '', page = 1) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: {
        language: 'en-US',
        page,
        query,
      },
    });
    return data.results;
  } catch (error) {
    alert('Oops, there is no movie');
  }
};

export const fetchMovieDetails = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`, {
      params: {
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    alert('Oops, there is no movie with that name');
  }
};

export const fetchMovieCast = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`, {
      params: {
        language: 'en-US',
      },
    });
    return data.cast;
  } catch (error) {
    alert('Oops, there is no cast movie');
  }
};

export const fetchMovieReviews = async (id, page = 1) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews
`,
      {
        params: {
          language: 'en-US',
        },
      }
    );
    return data.results;
  } catch (error) {
    alert('Oops, we don`t have any reviews');
  }
};
