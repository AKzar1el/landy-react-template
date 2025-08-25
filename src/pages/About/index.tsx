// src/pages/About/index.tsx
import { lazy, Fragment } from "react";

import Hero from "../../content/about/Hero.json";
import Story from "../../content/about/Story.json";
import Values from "../../content/about/Values.json";
import ContactContent from "../../content/ContactContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Container   = lazy(() => import("../../common/Container"));
const ContentBlock= lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact     = lazy(() => import("../../components/ContactForm"));

const AboutSad = () => {
  return (
    <Fragment>
      <ScrollToTop />

      {/* Full-bleed hero, same trick you used on Home */}
      <ContentBlock
        direction="right"
        title={Hero.title}
        content={Hero.text}
        button={[
          { title: "ZAČNI BREZPLAČNO", href: "https://app.tomlero.si/" }, // ✅ typed link button
          // { title: "Več", targetId: "about" }, // optional scroll button
        ]}
        icon="developer.svg"          // swap if you have an about icon
        id="about-hero"
        fullBleed
        heroBg="linear-gradient(135deg,#6A11CB,#2575FC)"
      />

      <Container>
        <ContentBlock
          direction="left"
          title={Story.title}
          content={Story.text}
          icon="graphs.svg"
          id="story"
        />

        <MiddleBlock
          title={Values.title}
          content={Values.text}
          button={Values.button}
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

export default AboutSad;
