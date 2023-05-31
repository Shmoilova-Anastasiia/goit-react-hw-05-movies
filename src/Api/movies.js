import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: '94dbe73fcd84ac739d9a0f3a17326b65',
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/get-trending');
    return data;
  } catch (error) {
    alert('Oops, there is no movies');
  }
};

// export const getSearchMovies = async () => {
//     try {

//     }
// };
