import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service/reqestApi';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { id } = useParams();
  const [filmCast, setfilmCast] = useState({});
  useEffect(() => {
    getFilmCast(id).then(data => {
      return setfilmCast(data);
    });
  }, [id]);

  if (!filmCast) {
    return;
    }

    console.log(filmCast);
    
  return <div>Cast</div>;
};
