import axios from 'axios';

export const loadMovies = searchKey =>
  axios('https://react-intro-movies.herokuapp.com/movies', {
    params: { q: searchKey }
  }).then(res => res.data);

export const createMovie = movie =>
  axios
    .post('https://react-intro-movies.herokuapp.com/movies', movie)
    .then(res => res.data);
