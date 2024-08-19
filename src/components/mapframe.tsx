import Link from "next/link";

interface IMapFrame {
    href: string;
}

export const MapFrame = ({href}: IMapFrame) => {
    return (
        <div className="flex m-auto">
            <iframe
                src={href}
                width="600" height="450" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}