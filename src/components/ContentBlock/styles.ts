import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const HeroSection = styled(ContentSection)`
  position: relative;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background: var(--hero-bg, linear-gradient(135deg,#FF7A00,#2E186A));
    z-index: 0;
    pointer-events: none;   /* ⬅️ can't block clicks */
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      rgba(0,0,0,var(--hero-ovl-l,0)) 0%,
      rgba(0,0,0,var(--hero-ovl-m,0)) 38%,
      rgba(0,0,0,var(--hero-ovl-r,0)) 60%,
      rgba(0,0,0,0) 80%
    );
    z-index: 1;
    pointer-events: none;   /* ⬅️ can't block clicks */
  }
`;

export const CopyPlate = styled.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    inset: -20px -28px;
    border-radius: 28px;
    background: radial-gradient(120% 120% at 0% 35%,
      rgba(0,0,0,0.58) 0%,
      rgba(0,0,0,0.42) 50%,
      rgba(0,0,0,0.22) 75%,
      rgba(0,0,0,0.00) 100%);
    filter: blur(2px);
    pointer-events: none;   /* ⬅️ can't block clicks */
  }

  > * { position: relative; z-index: 1; }
`;


/** Inner container: side padding + cancel AntD gutter edges */
export const HeroInner = styled.div`
  position: relative;
  z-index: 2; /* above ::before/::after */
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(24px, 6vw, 88px);

  /* Neutralize AntD Row/Col gutter edge behavior inside hero only */
  .ant-row { margin-left: 0 !important; margin-right: 0 !important; }
  .ant-col { padding-left: 0 !important; padding-right: 0 !important; }

  /* WIN the cascade inside the hero */
  &&,
  && h1, && h2, && h3, && h4, && h5, && h6,
  && p, && a, && span, && li, && strong, && em {
    color: #fff !important;
  }

  -webkit-font-smoothing: subpixel-antialiased;
  text-shadow: none;
`;



export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)
  .withConfig({
    // prevent leaking "direction" to AntD/DOM
    shouldForwardProp: (prop, defaultValidator) =>
      defaultValidator(prop) && String(prop) !== "direction",
  })
  .attrs<{ direction?: "left" | "right" | "up" | "down" }>(
    ({ direction = "left" }) => ({
      // let HeroSection react via :has([data-direction="right"])
      "data-direction": direction,
    }),
  )<{ direction?: "left" | "right" | "up" | "down" }>`
    /* Only flip when it's explicitly "right"; otherwise default layout */
    flex-direction: ${({ direction = "left" }) =>
      direction === "right" ? "row-reverse" : "row"};
  `;
export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;

  /* inside the hero, force white */
  ${HeroSection} & { color: #fff !important; }
`;

export const MinPara = styled("p")`
  font-size: 13px;
  /* inside the hero, force white */
  ${HeroSection} & { color: #fff !important; }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const CtaLink = styled.a`
  --purple: rgb(46, 24, 106);
  --orange: #ff7a00;
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  min-height: 36px;
  background: var(--orange);
  color: #fff;
  box-shadow: 0 2px 6px rgba(46, 24, 106, 0.25);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease;

  &[data-variant="secondary"] { background: var(--purple); color:#fff; }
  &:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(46, 24, 106, 0.35); }
  &:active { transform: translateY(0); }

  /* ⬇️ Make hero CTAs a bit bigger, leave others unchanged */
  ${HeroSection} & {
    padding: 12px 18px;
    min-height: 44px;
    font-size: 15px;
    border-radius: 14px;
  }
`;

