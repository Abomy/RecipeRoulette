import styled, { css } from 'styled-components';

export const TabTitle = styled.div<{ active: boolean }>`
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: lightgray;
  }

  ${(p) =>
    p.active &&
    css`
      background-color: gray;
      color: white;
    `}
`;

export const TabTitleBar = styled.div`
  display: flex;
  padding-bottom: 20px;

  > * {
    margin-right: 30px;
  }
`;
