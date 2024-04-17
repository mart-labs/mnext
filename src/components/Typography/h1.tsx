import { H1Props } from "../../models";

export function H1({ className, children, ...props }: H1Props) {
  return (
    <h1
      {...props}
      className={`text-4xl font-extrabold tracking-tight md:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}
