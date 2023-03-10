import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Position = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: violet;

  &:hover {
    color: white;
    background-color: purple;
  }
`;
export const Linka = styled(NavLink)`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: violet;

  &.active {
    color: white;
    background-color: purple;
  }
`;

export const Item = styled.li`
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Img = styled.img`
  margin-right: 50px;
`;

// export const Btn = styled.button`
//   background-color: violet;
//   border-radius: 10px;
//   height: 40px;
//   border: none;
//   font-weight: 500;
//   color: white;
// `;
