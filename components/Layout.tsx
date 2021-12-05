import React from 'react';
import { Theme } from '@lib/theme';
import Footer from './Footer';
import Header from './Header';
import { StyledMain } from './styled/layout.styled';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <StyledMain>
        <Header />
        {children}
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
