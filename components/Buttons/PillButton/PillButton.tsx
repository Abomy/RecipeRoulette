import React, { ReactNode } from 'react';
import { Container } from './PillButton.styled';

interface ButtonProps {
  label: string | ReactNode;
}

export const PillButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function PillButton({ label, ...rest }, ref) {
    return (
      <Container ref={ref} {...rest}>
        {label}
      </Container>
    );
  }
);
