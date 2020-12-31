import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Header = () => (
  <header>
    <List>
      <ul>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </List>
  </header>
);

export default Header;
