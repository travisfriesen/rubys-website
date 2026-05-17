import type { ReactNode } from "react";

interface PageGridItemProps {
  children: ReactNode;
  className?: string;
}

export function PageGridItem({ children, className = "" }: PageGridItemProps) {
  return <div className={`m-auto ${className}`}>{children}</div>;
}
