import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f516fdc3d4918369a6ad5ae834597c19';

async function fetchTrendingMovies(currentPage = 1) {
  const promise = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${currentPage}`
  );
  if (!promise.status) {
    throw new Error('Something went wrong');
  }

  return promise;
}

async function fetchGenres() {
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const promise = await axios.get(`${URL}`);
  if (!promise.status) {
    throw new Error('Something went wrong');
  }

  return promise;
}

async function fetchMovies(searchQuery, currentPage = 1) {
  const promise = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}`
  );
  if (!promise.status) {
    throw new Error('Something went wrong');
  }

  return promise;
}

async function fetchInfoMovieById(id) {
  const promise = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!promise.status) {
    throw new Error('Something went wrongs');
  }

  return promise;
}

export { fetchTrendingMovies, fetchGenres, fetchMovies, fetchInfoMovieById };
