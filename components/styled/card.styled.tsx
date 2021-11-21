import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, ${props => props.opacity});
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  margin: 20px 0;
  padding: 8rem;

  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const CenteredCard = styled(StyledCard)`
  margin: 20px auto;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
