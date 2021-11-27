import { StyledHeader, Nav, Logo } from './styled/header.styled';
import { Container } from './styled/container.styled';
import { Button } from './styled/button.styled';
import { Theme } from '../lib/theme';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Header(...args) {
  const { user, isLoading } = useUser();
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={Theme.images.logo} alt='' />
          <h1>Recipe Thingy!</h1>
          {user ? (
            <Link href='/profile'>
              <Button>Profile</Button>
            </Link>
          ) : (
            <a href='/api/auth/login'>
              <Button>Login</Button>
            </a>
          )}
        </Nav>
      </Container>
    </StyledHeader>
  );
}
