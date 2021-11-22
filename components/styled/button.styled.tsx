import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || "#fff"}
    color: ${({ color }) => color || "#fff"}

  &:hover {
    opacity: 0.1;
    transform: scale( 0.98);
  }
`;
