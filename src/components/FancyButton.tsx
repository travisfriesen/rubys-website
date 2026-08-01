import { Link } from "react-router-dom";

interface IFancyButton {
  href: string;
  label: string;
  bgColour?: string;
}

export const FancyButton = ({ href, label, bgColour = "bg-r-white" }: IFancyButton) => {
  const colorMap: Record<string, string> = {
    "bg-r-white": "bg-r-white/35",
    "bg-r-green": "bg-r-green/35",
    "bg-r-blue": "bg-r-blue/35",
    "bg-r-red": "bg-r-red/35",
    "bg-r-black": "bg-r-black/35",
  };
  const buttonColour = colorMap[bgColour.trim()] ?? "bg-r-white/35";

  return (
    <div className="pl-5 pr-5">
      <div
        className={`flex items-center justify-center m-auto ${buttonColour} h-16 rounded-2xl w-auto p-6`}
      >
        <Link className="flex items-center justify-center w-full h-full" to={href}>
          <p className="text-center text-r-text">{label}</p>
        </Link>
      </div>
    </div>
  );
};
