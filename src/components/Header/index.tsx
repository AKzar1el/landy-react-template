import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleButton = () => setVisibility(!visible);

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const el = document.getElementById(id) as HTMLDivElement | null;
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Storitev")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Uporaba")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Produkt")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall   as="a"
          href="https://app.tomlero.si/"
          style={{ width: 180 }}
          target="_self"              // or "_blank" to open in new tab
          rel="noopener noreferrer"   // keep for security if using _blank
          >
          <Span><Button>{t("ZAČNI BREZPLAČNO")}</Button></Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection className={scrolled ? "scrolled" : ""}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="166px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>

        <Drawer
          closable={false}
          open={visible}
          onClose={toggleButton}
          zIndex={1000}        /* stays over the sticky header */
        >
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}><Menu>Menu</Menu></Col>
              <Col span={12}><Outline /></Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
