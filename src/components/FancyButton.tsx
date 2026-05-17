import { Link } from "react-router-dom";

interface IFancyButton {
  href: string;
  label: string;
  bgColour?: string;
}

export const FancyButton = ({ href, label, bgColour = "bg-r-white" }: IFancyButton) => {
  return (
    <div className="pl-5 pr-5">
      <div
        className={`flex items-center justify-center m-auto ${bgColour} bg-opacity-35 h-16 rounded-2xl w-auto p-6`}
      >
        <Link className="flex items-center justify-center w-full h-full" to={href}>
          <p className="text-center text-r-text">{label}</p>
        </Link>
      </div>
    </div>
  );
};
