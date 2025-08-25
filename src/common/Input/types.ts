import type React from "react";
import type { TFunction } from "react-i18next";

// Accept ALL native <input> attributes (required, value, type, etc.)
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder: string;
  t: TFunction;
  required: boolean;
};

// Accept ALL native <textarea> attributes
export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  placeholder: string;
  t: TFunction;
};
