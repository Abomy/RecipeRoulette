import React from "react";
import { InputContainer } from "./styled/container.styled";
import {
  StyledInput,
  SubmitButton,
  StyledLabel,
  ErrorLabel,
} from "./styled/fields.styled";

interface BaseInputProps
  extends Pick<
    React.HTMLProps<HTMLInputElement>,
    "onChange" | "onBlur" | "type"
  > {
  label: string;
  error?: { message: string };
}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    if (props.label) {
      return (
        <InputContainer>
          <StyledLabel>{props.label}</StyledLabel>
          <StyledInput {...props} ref={ref} />
          <ErrorLabel>{props?.error?.message}</ErrorLabel>
        </InputContainer>
      );
    }
    return <StyledInput {...props} />;
  }
);

export const UserNameInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <BaseInput {...props} ref={ref} />;
  }
);

export const EmailInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <BaseInput {...props} ref={ref} />;
  }
);

export const PasswordInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <BaseInput type={"password"} {...props} ref={ref} />;
  }
);

export const ButtonInput = props => {
  return <SubmitButton type={"submit"} value={props.label} />;
};
