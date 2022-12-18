import { Routes, Route } from 'react-router-dom';
import {Layout} from "./Layout/Layout"
import {Home} from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from '../pages/MoviesDetails';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />} />
      </Route>
    </Routes>
    // </div>
  );
};
