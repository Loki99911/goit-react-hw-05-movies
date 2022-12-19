import { useParams } from 'react-router-dom';
import { getFilmByID } from 'service/reqestApi'
import { Link, Outlet } from 'react-router-dom';

export const MoviesDetails = () => {
  const { id } = useParams();
  const film = getFilmByID(id);
  console.log(film);
  return (
    <main>
      <button type="button">Go back</button>
      <div>
        <img src="" alt="Film poster" />
        <h1>Film Name</h1>
        <p>User Score: 100500%</p>
        <h2> Overview</h2>
        <p>Film discription.........</p>
        <h2>Genres</h2>
        <p>Genres............</p>
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
