import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: violet;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: violet;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Text = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  color: inherit;
  &:hover {
    color: violet;
  }
`;