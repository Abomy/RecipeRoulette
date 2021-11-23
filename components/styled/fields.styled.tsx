import styled from "styled-components";

export const ErrorLabel = styled.label`
  // specifics
  font-size: 2em;
  color: red;
  right: 1.1em;
  bottom: 0.7em;
  position: absolute;
  opacity: 0;

  transition: ease 300ms;
`;

export const StyledInput = styled.input`
  font-size: 3em;
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

export const StyledLabel = styled.label`
  // specifics
  display: inline-block;
  word-wrap: break-word;
  max-width: inherit;
  font-size: 3em;
`;

export const SubmitButton = styled(StyledInput)`
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
