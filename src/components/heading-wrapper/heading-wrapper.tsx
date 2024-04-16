import { ReactNode } from "react";
import { H1 } from "../";

interface Props {
  title: string;
  description?: ReactNode;
  buttons?: ReactNode;
  className?: string;
  borderBottom?: boolean;
}

export function HeadingWrapper({
  title,
  description,
  buttons,
  className,
  borderBottom,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center px-5 ${borderBottom ? "border-b" : ""} ${className}`}
    >
      <header className="w-full max-w-[1220px] py-10 flex justify-between gap-4 max-md:flex-col">
        <div className="flex flex-col justify-start gap-2">
          <H1>{title}</H1>
          <p className="text-muted-foreground max-w-[660px]">{description}</p>
        </div>
        <nav className="flex items-start">
          <div className="flex gap-3 max-sm:w-full sm:items-center max-sm:flex-col">
            {buttons}
          </div>
        </nav>
      </header>
    </div>
  );
}
