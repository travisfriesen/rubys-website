import Link from "next/link";

interface IButton {
    href: string;
    label: string;
    bgcolour: string;
}

export const FancyColouredButton = ({href, label, bgcolour}: IButton) => {
    return (
        <div className="pl-5 pr-5">
        <div className={`flex m-auto ${bgcolour} bg-opacity-35 align-middle justify-center pt-4 h-16 rounded-2xl w-auto p-6`}>
            <Link className="w-full h-full" href={href}>
                <p className="text-center text-r-text">{label}</p>
            </Link>
        </div>
        </div>
    )
}