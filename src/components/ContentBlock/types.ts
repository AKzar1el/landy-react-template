// src/components/ContentBlock/types.ts
import { TFunction } from "react-i18next";

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export interface SectionItem {
  title: string;
  content: string;
  icon: string;
  ctas?: CTA[];
}

export interface ButtonItem {
  title: string;
  color?: string;
  href?: string;
  external?: boolean;
}

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  bg?: string;
  gradient?: boolean;
  brandColor?: string;
  section?: SectionItem[];
  button?: ButtonItem[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  /** Make this block full-bleed and kill grid padding/gutters */
  fullBleed?: boolean;
  /** Optional CSS for hero background (color/gradient) */
  heroBg?: string;
}
