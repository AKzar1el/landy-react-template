import React from "react";
import { StyledButton } from "./styles";

/** Allow both real <button> and <a> usage */
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: "a";
};
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};

export type ButtonProps = (AnchorButtonProps | NativeButtonProps) & {
  // keep any custom design props here, e.g. variant, size, etc.
  // variant?: "primary" | "ghost";
};

const Button: React.FC<ButtonProps> = ({ as = "button", children, ...rest }) => {
  // styled-components will swap the underlying tag with `as`
  return (
    <StyledButton as={as} {...(rest as any)}>
      {children}
    </StyledButton>
  );
};

export { Button };
export default Button;
