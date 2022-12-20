import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service/reqestApi';
import { useState, useEffect } from 'react';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
const anonimus =
  'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png';

export const Cast = () => {
  const { id } = useParams();
  const [filmCast, setfilmCast] = useState([]);
  useEffect(() => {
    getFilmCast(id)
      .then(data => {
        return setfilmCast(data.cast);
      })
      .catch(console.log('errroe'));
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
              src={
                filmActior.profile_path
                  ? `${BASE_URL}${filmActior.profile_path}`
                  : anonimus
              }
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
