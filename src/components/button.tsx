import Link from "next/link";

interface IButton {
    href: string;
    label: string;
}

export const Button = ({href, label}: IButton) => {
    return (
        <div className="flex m-auto">
            <Link href={href}>
                <div>{label}</div>
            </Link>

        </div>
    )
}