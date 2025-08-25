// types.ts

export type Direction = "left" | "right" | "up" | "down";

export type SectionCTA = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export type SectionItem = {
  icon?: string;
  title: string;
  content: string;
  ctas?: SectionCTA[];
};

export type ButtonScroll = {
  /** Button text (translation key) */
  title: string;
  /** Scroll target element id */
  targetId: string;
  /** Optional color/variant switch kept from your existing API */
  color?: string;
  /** Explicit external flag is ignored for scroll buttons */
  external?: never;
  href?: never;
};

export type ButtonLink = {
  /** Button text (translation key) */
  title: string;
  /** Navigate to this URL instead of scrolling */
  href: string;
  /** Force external behavior; if omitted we auto-detect http(s) */
  external?: boolean;
  /** Optional color/variant switch kept from your existing API */
  color?: string;
  targetId?: never;
};

export type ButtonItem = ButtonScroll | ButtonLink;

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: SectionItem[];
  /** One or more buttons beneath the content */
  button?: ButtonItem[];
  /** Anchor id for the whole block */
  id?: string;
  direction?: Direction;
  /** Use full-bleed hero styling */
  fullBleed?: boolean;
  /** Custom gradient/color for hero; injected as CSS var --hero-bg */
  heroBg?: string;
  /** i18n translator injected by withTranslation() */
  t: (k: string) => string;
}
