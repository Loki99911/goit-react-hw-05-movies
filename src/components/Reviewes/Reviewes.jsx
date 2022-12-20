import { useParams } from 'react-router-dom';
import { getFilmReviewes } from 'service/reqestApi';
import { useState, useEffect } from 'react';
import { List } from './Reviewes.styled';

const Reviewes = () => {
  const { id } = useParams();
  const [filmReviewes, setfilmReviewes] = useState([]);
  useEffect(() => {
    getFilmReviewes(id).then(data => {
      return setfilmReviewes(data.results);
    });
  }, [id]);

  if (!filmReviewes) {
    return;
  }

  return (
    <div>
      {filmReviewes.length === 0 ? (
        <p>We don`t have any reviewes for this movie.</p>
      ) : (
        <List>
          {filmReviewes.map(filmReview => (
            <li key={filmReview.id}>
              <h3>Author: {filmReview.author}</h3>
              <p>{filmReview.content}</p>
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default Reviewes;
