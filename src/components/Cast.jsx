import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service/reqestApi';
import { useState, useEffect } from 'react';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const { id } = useParams();
  const [filmCast, setfilmCast] = useState([]);
  useEffect(() => {
    getFilmCast(id).then(data => {
      return setfilmCast(data.cast);
    });
  }, [id]);

  if (!filmCast) {
    return;
    }

    console.log(filmCast);

  return (
      <div>
      <ul>
        {filmCast.map(filmActior => (
          <li key={filmActior.id}>
            <img
              src={`${BASE_IMG}${filmActior.profile_path}`}//null бывает!!
              alt={filmActior.name}
              width="150"
            />
            <p>Author: {filmActior.name}</p>
            <p>{filmActior.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
