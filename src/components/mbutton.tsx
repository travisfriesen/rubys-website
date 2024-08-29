import Link from "next/link";

interface IButton {
    href: string;
    label: string;
    onClick?: () => void;
}

export const MButton = ({href, label, onClick}: IButton) => {
    return (
        <div className="flex m-auto z-50">
            <Link href={href}>
                <div className="text-r-text">{label}</div>
            </Link>

        </div>
    )
}