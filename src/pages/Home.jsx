import { getPopularFilms } from 'service/reqestApi';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    // if (films.length === 0) {
    //   return;
    // }
    getPopularFilms().then(data => {
      return setFilms(data);
    });
  }, []);
  console.log(films);
  return (
    <main>
      <h1>Film List!!!!!!!!!</h1>
      <h1>Film List!!!!!!!!!</h1>
      <h1>Film List!!!!!!!!!</h1>
    </main>
  );
};
