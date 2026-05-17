import { Link } from "react-router-dom";

interface IButton {
  href: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({ href, label, onClick }: IButton) => {
  return (
    <div className="flex m-auto">
      <Link className="w-full h-full" to={href}>
        <div className="text-r-text text-center">{label}</div>
      </Link>
    </div>
  );
};
