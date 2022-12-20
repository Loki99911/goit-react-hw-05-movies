const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9739146968645f4ae720d1253291b334';

export const getPopularFilms = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

export const getFilmByID = (id) => {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const getFilmCast = (id) => {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const getFilmReviewes = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const getFilmByQuery = query => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};




