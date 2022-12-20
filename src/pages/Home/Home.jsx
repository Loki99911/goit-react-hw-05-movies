import { getPopularFilms } from 'service/reqestApi';
import { useState, useEffect } from 'react';
import { Container, List, Link, Item, Img, Text } from './Home.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularFilms()
      .then(data => {
        return setFilms(data.results);
      });
  }, []);

  if (!films) {
    return;
  }

  return (
    <Container>
      <h1>Trending today</h1>
      <List>
        {films.map(film => (
          <Item key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <Img
                src={`${BASE_IMG}${film.poster_path}`}
                alt={film.original_title}
                width="50"
              />
              <Text>{film.original_title}</Text>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Home;
