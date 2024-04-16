import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLHeadingElement> {}

export function H1({ className, children, ...props }: Props) {
  return (
    <h1
      {...props}
      className={`text-4xl font-extrabold tracking-tight md:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}
