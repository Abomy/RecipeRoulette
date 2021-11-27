import React from 'react';
import { StyledHeader, Nav, Logo } from './styled/header.styled';
import { Container } from './styled/container.styled';
import { PillButton } from './Buttons/PillButton/PillButton';
import { Theme } from '../lib/theme';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Header(...args) {
  const { user, isLoading } = useUser();
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Link href='/'>
            <Logo src={Theme.images.logo} alt='' />
          </Link>
          <h1>Recipe Thingy!</h1>
          {user ? (
            <Link href='/profile'>
              <PillButton label={'Profile'} />
            </Link>
          ) : (
            <a href='/api/auth/login'>
              <PillButton label={'Login'} />
            </a>
          )}
        </Nav>
      </Container>
    </StyledHeader>
  );
}
