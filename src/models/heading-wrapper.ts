import { ReactNode } from "react";

export interface HeadingWrapperProps {
  title: string;
  description?: ReactNode;
  buttons?: ReactNode;
  className?: string;
  borderBottom?: boolean;
}
