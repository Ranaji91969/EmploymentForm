import React from 'react';
// import headerImage from './header.png';

const Header = ({headerImage}) => {
  return (
    <header>
      <img src={headerImage} alt="Header" />
    </header>
  );
};

export default Header;
