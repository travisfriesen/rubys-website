import type { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  bgColour?: string;
  children?: ReactNode;
}

export function PageBanner({
  title,
  subtitle,
  bgColour = "bg-r-green",
  children,
}: PageBannerProps) {
  return (
    <div className={`${bgColour} m-auto px-6 py-20 text-center`}>
      <h1 className="pb-5 text-4xl text-r-text">{title}</h1>
      <h2 className="pb-2 text-2xl text-r-text">{subtitle}</h2>
      {children}
    </div>
  );
}
