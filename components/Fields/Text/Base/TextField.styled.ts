import { TextStyles } from '@components/TextStyles';
import styled from 'styled-components';

export const TextField = styled.input`
  ${TextStyles.Medium65}

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;

  &:hover {
    background-color: #d8eed9;
  }

  &:focus {
    border-color: #d8eed9;
    background-color: #d8eed9;
  }
`;
