import { Link } from "react-router-dom";

interface IButton {
  href: string;
  label: string;
}

export const FancyButton = ({ href, label }: IButton) => {
  return (
    <div className="flex m-auto bg-r-white bg-opacity-35 align-middle justify-center pt-4 h-16 rounded-2xl w-auto p-6">
      <Link className="w-full h-full" to={href}>
        <p className="text-center text-r-text">{label}</p>
      </Link>
    </div>
  );
};
