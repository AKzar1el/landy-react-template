import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  CtaRow,
  CtaLink,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement | null;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isExternal = (href?: string, explicit?: boolean) =>
    explicit ?? Boolean(href && /^https?:\/\//i.test(href));

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>

          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

              {direction === "right" ? (
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map((item, idx) => {
                      if (item.href) {
                        const external = isExternal(item.href, item.external);
                        return (
                          <CtaLink
                            key={`${item.href}-${idx}`}
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            data-variant={item.color ? "secondary" : "primary"}
                            aria-label={
                              external
                                ? `${t(item.title)} (odpre se v novem zavihku)`
                                : t(item.title)
                            }
                          >
                            {t(item.title)}
                          </CtaLink>
                        );
                      }
                      return (
                        <Button key={idx} color={item.color} onClick={() => scrollTo("about")}>
                          {t(item.title)}
                        </Button>
                      );
                    })}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {Array.isArray(section) &&
                      section.map((item, idx) => (
                        <Col key={idx} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>

                          {item.ctas && item.ctas.length > 0 && (
                            <CtaRow>
                              {item.ctas.map((cta, i) => {
                                const external = isExternal(cta.href, cta.external);
                                return (
                                  <CtaLink
                                    key={`${cta.href}-${i}`}
                                    href={cta.href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                    data-variant={cta.variant ?? (i > 0 ? "secondary" : "primary")}
                                    aria-label={
                                      external
                                        ? `${t(cta.label)} (odpre se v novem zavihku)`
                                        : t(cta.label)
                                    }
                                  >
                                    {t(cta.label)}
                                  </CtaLink>
                                );
                              })}
                            </CtaRow>
                          )}
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
