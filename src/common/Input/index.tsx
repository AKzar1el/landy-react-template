import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, t, required }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      id={name}
      name={name}
      placeholder={t(placeholder)}
      required={required}
    />
  </Container>
);

export default withTranslation()(Input);
