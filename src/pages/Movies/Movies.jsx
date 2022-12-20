import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmByQuery } from 'service/reqestApi';
import { Container, List, Link, Item, Img, Text, Input, Btn } from './Movies.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const onFormSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value === "") {
      return;
    }
      setSearchParams({ query: event.target.elements.query.value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getFilmByQuery(query)
      .then(data => {
        return setFilms(data.results);
      });
  }, [query]);

  if (!films) {
    return;
  }

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
        />
        <Btn type="submit">
          <span>Search</span>
        </Btn>
      </form>
      {films.length !== 0 && (
        <List>
          {films.map(film => (
            <Item key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location }}
                style={{ display: 'flex' }}
              >
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
      )}
    </Container>
  );
};

export default Movies;