import React, { ReactNode } from 'react';
import { Container } from './Button.styled';

interface ButtonProps {
  label: string | ReactNode;
}

export const BoxButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function BoxButton({ label, ...rest }, ref) {
    return (
      <Container ref={ref} {...rest}>
        {label}
      </Container>
    );
  }
);
