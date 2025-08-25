import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  HeroSection,
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
  fullBleed,
  heroBg,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id) as HTMLDivElement | null;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isExternal = (href?: string, explicit?: boolean) =>
    explicit ?? Boolean(href && /^https?:\/\//i.test(href));

  const Section = fullBleed ? HeroSection : ContentSection;

  return (
    <Section style={fullBleed ? ({ ["--hero-bg" as any]: heroBg } as React.CSSProperties) : undefined}>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          id={id}
          direction={direction}
          justify="space-between"
          align="middle"
          gutter={fullBleed ? [0, 0] : undefined}  // ⬅ zero gutter inside hero
        >
          {/* Make columns fill the row: 12 + 12 = 24 */}
          <Col lg={12} md={12} sm={24} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>

          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

              {direction === "right" ? (
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map((item, idx) => {
                      if ((item as any).href) {
                        const b = item as any;
                        const external = isExternal(b.href, b.external);
                        return (
                          <CtaLink
                            key={`${b.href}-${idx}`}
                            href={b.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            data-variant={b.color ? "secondary" : "primary"}
                            aria-label={external ? `${t(b.title)} (odpre se v novem zavihku)` : t(b.title)}
                          >
                            {t(b.title)}
                          </CtaLink>
                        );
                      }
                      return (
                        <Button key={idx} color={(item as any).color} onClick={() => scrollTo("about")}>
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
                                    aria-label={external ? `${t(cta.label)} (odpre se v novem zavihku)` : t(cta.label)}
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
    </Section>
  );
};

export default withTranslation()(ContentBlock);
