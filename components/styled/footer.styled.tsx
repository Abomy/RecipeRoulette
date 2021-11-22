import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 2em;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colours.footer};
  color: #fff;
  padding: 0.5em 0 1px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 1px;
  }
  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: -2px;
    }
    p {
      text-align: center;
    }
  }
`;
