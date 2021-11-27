import styled from 'styled-components';
import { TextStyles } from '../../TextStyles';

export const Container = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 15px 60px;
  background-color: #fff;
  color: #4f4f4f;

  ${TextStyles.Roman55}

  &:hover {
    transform: scale(0.98);
  }
`;
