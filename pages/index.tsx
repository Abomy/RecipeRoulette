import React from 'react';
import { CenteredCard } from '@components/styled/card.styled';
import { Container } from '@components/styled/container.styled';
import { getAuthorizedUser } from '@lib/auth/auth';

const Landing = () => {
  return (
    <Container>
      <CenteredCard opacity={'0.9'}></CenteredCard>
    </Container>
  );
};

export default Landing;
