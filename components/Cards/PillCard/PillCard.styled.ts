import styled from 'styled-components';
import { Card } from '../Base/Card.styled';

export const PillCard = styled(Card)`
  border-radius: 50px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colours.primary};
`;
