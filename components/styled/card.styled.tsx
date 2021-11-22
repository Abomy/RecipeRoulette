import styled from "styled-components";

export const StyledCard = styled.div<{
  opacity?: string;
  margin?: string;
  padding?: string;
}>`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, ${props => props.opacity});
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  margin: ${props => props.margin || "10rem 0"};
  padding: ${props => props.padding || "6rem"};

  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const CenteredCard = styled(StyledCard)<{
  margin?: string;
}>`
  margin: ${props => props.margin || "2em "} auto;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
