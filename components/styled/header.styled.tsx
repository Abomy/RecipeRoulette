import styled from 'styled-components';

export const StyledHeader = styled.header`
  font-size: 3em;
  background-color: ${({ theme }) => theme.colours.primary};
  padding: 0px 0;
  margin: 1rem;
  border-radius: 5px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 10px;
  }
`;
