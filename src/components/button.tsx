import Link from "next/link";

interface IButton {
    href: string;
    label: string;
    onClick?: () => void;
}

export const Button = ({href, label, onClick}: IButton) => {
    return (
        <div className="flex m-auto">
            <Link href={href}>
                <div>{label}</div>
            </Link>

        </div>
    )
}