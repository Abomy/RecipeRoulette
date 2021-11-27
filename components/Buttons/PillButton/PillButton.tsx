import React, { ReactNode } from 'react';
import { Container } from './PillButton.styled';

// interface ButtonProps
//   extends Omit<
//     React.HTMLProps<HTMLButtonElement>,
//     'label' | 'ref' | 'type' | 'as'
//   > {
//   label: string | ReactNode[];
// }
interface ButtonProps
  extends Pick<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'onMouseDown'> {
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
