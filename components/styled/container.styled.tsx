import styled from "styled-components";
import { ErrorLabel } from "./fields.styled";

export const Container = styled.div`
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  position: relative;
`;

export const InputContainer = styled(Container)`
  :focus-within {
    ${ErrorLabel} {
      opacity: 1;
    }
  }
`;
