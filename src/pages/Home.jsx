import { getPopularFilms } from 'service/reqestApi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getPopularFilms().then(data => {
      return setFilms(data.results);
    });
  }, []);

  if (!films) {
    return;
  }
  // console.log(films);
  return (
    <main>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <img
                src={`${BASE_IMG}${film.poster_path}`}
                alt={film.original_title}
                width="150"
              />
              <p>{film.original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

// const { useState, useRef, useLayoutEffect } = React;

// function ComponentDidUpdateFunction() {
//   const [count, setCount] = useState(0);

//   const firstUpdate = useRef(true);
//   useLayoutEffect(() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false;
//       return;
//     }

//     console.log("componentDidUpdateFunction");
//   });

//   return (
//     <div>
//       <p>componentDidUpdateFunction: {count} times</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <ComponentDidUpdateFunction />,
//   document.getElementById("app")
// );
