import React from 'react';
import { Container } from '@components/styled/container.styled';
import CreateRecipe from '@layout/CreateRecipe';
import { CenteredCardBlock } from '@components/styled/card.styled';

const Create = () => {
  return (
    <Container>
      <CreateRecipe />
    </Container>
  );
};

export default Create;
