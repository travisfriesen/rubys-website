import Link from "next/link";

interface IMapFrame {
    href: string;
}

export const MapFrame = ({href}: IMapFrame) => {
    return (
        <div className="flex m-auto h-[25rem]">
            <iframe
                src={href}
                width="100%" height="100%" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}