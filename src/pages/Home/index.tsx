// src/pages/Home/index.tsx
import { lazy, Fragment } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import { AboutContent } from "../../content/AboutContent";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Fragment>
      {/* keep this global helper outside any padded wrapper */}
      <ScrollToTop />

      {/* HERO OUTSIDE THE CONTAINER → full-bleed background won’t be framed */}
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={[
          { title: "ZAČNI BREZPLAČNO", href: "https://app.tomlero.si/", color: "secondary" }, // ✅ typed link button
          // { title: "Več", targetId: "about" }, // optional scroll button
        ]}
        icon="developer.svg"
        id="intro"
        fullBleed
        
        heroBg="linear-gradient(135deg,#FF8C1A,#2E186A)"   // or "linear-gradient(135deg,#FF7A00,#2E186A)"
      />

      {/* Everything else remains inside the page container */}
      <Container>
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />

        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />

        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />

        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />

        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </Fragment>
  );
};

export default Home;
