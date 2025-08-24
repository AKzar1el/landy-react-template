import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<{ direction: string }>`
  flex-direction: ${({ direction }) => (direction === "left" ? "row" : "row-reverse")};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
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
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

/* ⬇️ New: CTA styles (anchors as buttons) */
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
  background: var(--orange);
  color: #fff;
  box-shadow: 0 2px 6px rgba(46, 24, 106, 0.25);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease;
  min-height: 36px; /* improves touch targets */

  &[data-variant="secondary"] {
    background: var(--purple);
    color: #fff;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(46, 24, 106, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;
