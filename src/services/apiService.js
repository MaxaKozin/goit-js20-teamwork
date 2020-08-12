import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const apiKey = "4858d21346699d14f09ede89415e4aeb";

export const fetchRated = (page) => {
  return axios
    .get(`/trending/movie/day?api_key=${apiKey}&page=${page}`)
    .then(({ data }) => data.results);
};

export const fetchByQuery = (query, page) => {
  if (query) {
    return axios
      .get(`/search/movie?api_key=${apiKey}&query=${query}&${page}`)
      .then(({ data }) => data.results);
  }
};

export const fetchById = (movieId) => {
  return axios
    .get(`/movie/${movieId}?api_key=${apiKey}`)
    .then(({ data }) => data);
};

export const getImgUrl = (url) => {
  return `https://image.tmdb.org/t/p/original${url}`;
};
