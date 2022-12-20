import { useParams } from 'react-router-dom';
import { getFilmByID } from 'service/reqestApi';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  List,
  Link,
  Item,
  Img,
  Btn,
  Position,
} from './MoviesDetails.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const MoviesDetails = () => {
  const { id } = useParams();
  const [filmByID, setFilmByID] = useState({});
  const [ganre, setGanre] = useState([]);
  const location = useLocation();

  useEffect(() => {
     getFilmByID(id).then(data => {
setGanre(data.genres);
      return setFilmByID(data);
    });
  }, [id]);

  if (!filmByID) {
    return;
  }
  
  return (
    <Container>
      <Link to={location.state?.from ?? '/'}>
        <Btn type="button">Go back</Btn>
      </Link>
      <Position>
        <Img
          src={`${BASE_IMG}${filmByID.poster_path}`}
          alt="Film poster"
          width="250"
        />
        <div>
          <h1>{filmByID.original_title}</h1>
          <p>User Score: {filmByID.vote_average}</p>
          <h2> Overview</h2>
          <p>{filmByID.overview}</p>
          <h2>Genres</h2>
          {<p>{ganre.map(genr => genr.name).join(' ')}</p>}
        </div>
      </Position>
      <div>
        <h3>Additional information</h3>
        <List>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviewes">Reviewes</Link>
          </Item>
        </List>
      </div>
      <Outlet />
    </Container>
  );
};


export default MoviesDetails;