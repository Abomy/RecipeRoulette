import { TextStyles } from '@components/TextStyles';
import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 10px 25px;
  background-color: #fff;
  color: #4f4f4f;

  ${TextStyles.Medium65}

  &:hover {
    background-color: gray;
    color: white;
  }
`;
