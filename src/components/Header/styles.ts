import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  /* NEW: give the header the same gradient as hero */
  background: #2E186A;
  color: #fff; /* make default text readable on gradient */
  /* already sticky from before? keep it; if not, add these: */
  position: sticky;
  top: 0;
  z-index: 999;

  /* smooth, minimal animation */
  transition: padding 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
  box-shadow: 0 0 0 rgba(0,0,0,0);

  &.scrolled {
    padding: 0.5rem 0.5rem; /* slight compress */
    box-shadow: 0 8px 20px rgba(0,0,0,0.2); /* soft elevation */
  }

  /* accessibility: respect users who prefer less motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    /* was #2e186a */
    fill: #fff;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  /* new for readability */
  color: #fff;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  /* was #18216d */
  color: #fff;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  /* was #404041 */
  color: #fff;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  /* ensure icon is visible on gradient */
  color: #fff;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    /* warmer highlight to match the gradient */
    color: #FFD8A6;
    text-underline-position: under;
    text-decoration: #FFD8A6 wavy underline;
  }
`;
