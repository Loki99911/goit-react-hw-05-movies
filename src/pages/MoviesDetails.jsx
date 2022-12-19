import { useParams } from 'react-router-dom';
import { getFilmByID } from 'service/reqestApi';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

export const MoviesDetails = () => {
  const { id } = useParams();
  const [filmByID, setfilmByID] = useState({});
  useEffect(() => {
 
    getFilmByID(id).then(data => {
      return setfilmByID(data);
    });
  }, [id]);

  if (!filmByID) {
    return;
  }
  // console.log(filmByID);

  return (
    <main>
      <Link to="/">
        <button type="button">Go back</button>
      </Link>
      <div>
        <img
          src={`${BASE_IMG}${filmByID.poster_path}`}
          alt="Film poster"
          width="250"
        />
        <h1>{filmByID.original_title}</h1>
        <p>User Score: {filmByID.vote_average}</p>
        <h2> Overview</h2>
        <p>{filmByID.overview}</p>
        <h2>Genres</h2>
        {/* {filmByID.genres.map(genr=><p>genr.name</p>).join(" ")} */}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviewes">Reviewes</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
