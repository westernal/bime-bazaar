import { CSSProperties, ReactNode } from "react";

export interface CustomButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
}
