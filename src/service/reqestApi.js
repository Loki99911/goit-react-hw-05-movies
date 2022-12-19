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











// .then(data => {
//       return data;
// });
    




// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });
