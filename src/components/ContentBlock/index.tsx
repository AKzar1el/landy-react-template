import { type CSSProperties } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import {
  type ContentBlockProps,
  type ButtonItem,
  type ButtonLink,
} from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  HeroSection,
  HeroInner,
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

const isLinkButton = (btn: ButtonItem): btn is ButtonLink =>
  typeof (btn as ButtonLink).href === "string" && (btn as ButtonLink).href.length > 0;

const isExternal = (href?: string, explicit?: boolean) =>
  explicit ?? Boolean(href && /^https?:\/\//i.test(href));

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
  const scrollTo = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const Section = fullBleed ? HeroSection : ContentSection;

  // allow CSS custom property for hero background
  const sectionStyle: CSSProperties & { ["--hero-bg"]?: string } = {};
  if (fullBleed && heroBg) sectionStyle["--hero-bg"] = heroBg;

  const renderSectionGrid = () =>
    Array.isArray(section) && section.length > 0 ? (
      <ServiceWrapper>
        <Row justify="space-between">
          {section.map((item, idx) => (
            <Col key={idx} span={11}>
              {item.icon ? <SvgIcon src={item.icon} width="60px" height="60px" /> : null}
              <MinTitle>{t(item.title)}</MinTitle>
              <MinPara>{t(item.content)}</MinPara>

              {Array.isArray(item.ctas) && item.ctas.length > 0 ? (
                <CtaRow>
                  {item.ctas.map((cta, i) => {
                    const external = isExternal(cta.href, cta.external);
                    return (
                      <CtaLink
                        key={`${cta.href ?? "cta"}-${i}`}
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
              ) : null}
            </Col>
          ))}
        </Row>
      </ServiceWrapper>
    ) : null;

  const renderButtons = () =>
    Array.isArray(button) && button.length > 0 ? (
      <ButtonWrapper>
        {button.map((b, idx) => {
          if (isLinkButton(b)) {
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
          // Scroll button
          return (
            <Button key={idx} color={b.color} onClick={() => scrollTo(b.targetId ?? "about")}>
              {t(b.title)}
            </Button>
          );
        })}
      </ButtonWrapper>
    ) : null;

  return (
    <Section style={sectionStyle}>
      <Fade direction={direction} triggerOnce>
        {fullBleed ? (
          <HeroInner>
            <StyledRow
              id={id}
              direction={direction}
              justify="space-between"
              align="middle"
              gutter={[24, 24]}
            >
              <Col lg={12} md={12} sm={24} xs={24}>
                <SvgIcon src={icon} width="100%" height="100%" />
              </Col>

              <Col lg={12} md={12} sm={24} xs={24}>
                <ContentWrapper>
                  <h6>{t(title)}</h6>
                  <Content>{t(content)}</Content>

                  {renderSectionGrid()}
                  {renderButtons()}
                </ContentWrapper>
              </Col>
            </StyledRow>
          </HeroInner>
        ) : (
          <StyledRow id={id} direction={direction} justify="space-between" align="middle">
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>

            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t(title)}</h6>
                <Content>{t(content)}</Content>

                {renderSectionGrid()}
                {renderButtons()}
              </ContentWrapper>
            </Col>
          </StyledRow>
        )}
      </Fade>
    </Section>
  );
};

export default withTranslation()(ContentBlock);
