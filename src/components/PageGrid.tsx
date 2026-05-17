import type { ReactNode } from "react";

interface PageGridProps {
  children: ReactNode;
  className?: string;
}

export function PageGrid({ children, className = "" }: PageGridProps) {
  return (
    <div
      className={`grid desktop:grid-cols-2 mobile:grid-cols-1 mobile:gap-y-6 m-auto w-[95vw] h-fit py-[5%] ${className}`}
    >
      {children}
    </div>
  );
}
