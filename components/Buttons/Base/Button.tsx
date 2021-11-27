import React, { ReactNode } from 'react';
import { Container } from './Button.styled';

interface ButtonProps {
  label: string | ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  console.log(label);
  return <Container>label</Container>;
};
