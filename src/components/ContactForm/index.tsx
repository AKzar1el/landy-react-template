import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const FORM_ENDPOINT = "https://formsubmit.co/8898226276b560fb196d042d3763dc52 ";

const Contact = ({ title, content, id, t }: ContactProps) => {
  // Keep it simple: controlled inputs, native form POST (no custom handler).
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            {/* Native HTML POST straight to email via FormSubmit */}
            <FormGroup action={FORM_ENDPOINT} method="POST" autoComplete="off">
              {/* Anti-bot honeypot (hidden text field bots will fill) */}
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {/* Optional tweaks */}
              <input type="hidden" name="_subject" value="Tomlero.si – novo sporočilo" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Redirect after submit (optional). Change if you have a /thanks page. */}
              {/* <input type="hidden" name="_next" value="https://tomlero.si/#contact" /> */}

              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Ime"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <Span /> {/* keeps layout spacing similar to your old validation span */}
              </Col>

              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <Span />
              </Col>

              <Col span={24}>
                <TextArea
                  name="message"
                  placeholder="Vaše sporočilo"
                  value={values.message}
                  onChange={handleChange}
                  required
                />
                <Span />
              </Col>

              <ButtonContainer>
                {/* Ensure the underlying element is a real submit button */}
                <Button type="submit" name="submit">
                  {t("Pošlji")}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
