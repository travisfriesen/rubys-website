import { Link } from "react-router-dom";

interface IButton {
  href: string;
  label: string;
  bgcolour: string;
}

export const FancyColouredButton = ({ href, label, bgcolour }: IButton) => {
  return (
    <div className="pl-5 pr-5">
      <div
        className={`flex items-center justify-center m-auto ${bgcolour} bg-opacity-35 h-16 rounded-2xl w-auto p-6`}
      >
        <Link className="flex items-center justify-center w-full h-full" to={href}>
          <p className="text-center text-r-text">{label}</p>
        </Link>
      </div>
    </div>
  );
};
