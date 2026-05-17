import { Link } from "react-router-dom";

interface IButton {
  href: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({ href, label, onClick }: IButton) => {
  return (
    <div className="flex items-center justify-center m-auto">
      <Link className="flex items-center justify-center w-full h-full" to={href}>
        <div className="text-r-text">{label}</div>
      </Link>
    </div>
  );
};
