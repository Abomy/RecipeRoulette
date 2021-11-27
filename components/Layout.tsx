import React from 'react';
import { Theme } from '../lib/theme';
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
      <style jsx global>{`
        body {
          color: hsl(192, 100%, 9%);
          background-image: url(${Theme.background});
          background-repeat: no-repeat;
          background-attachment: fixed;
          font-family: Andale Mono, monospace;
          font-size: 40%;
          margin: 0px;
          padding: 0px;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Layout;
