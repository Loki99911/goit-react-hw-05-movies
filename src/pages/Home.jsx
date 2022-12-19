import { getPopularFilms } from 'service/reqestApi';
import { useState, useEffect } from 'react';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    // ___________________________НЕ ПОНЯЛ ВОТ ЄТОГО((((((((
    if (!films) {
      return;
    }
    getPopularFilms().then(data => {
      return setFilms(data.results);
    });
  }, []);
  // console.log(films);
  return (
    <main>
      <ul>
        {films.map((film)=>
        <li key={film.id}>
            <img src={film.poster_path} alt={film.original_title} />  
            {/* ХУЙНЯ ПОЛНАЯ!!!! src=`{BASE_IMG}+{film.poster_path}`*/}
        </li>)}
      </ul>
    </main>
  );
};
