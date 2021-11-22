import styled from "styled-components";

export const StyledHeader = styled.header`
  font-size: 3em;
  background-color: ${({ theme }) => theme.colours.header};
  padding: 0px 0;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottoms 0px; 

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 10px;
  }
`;
