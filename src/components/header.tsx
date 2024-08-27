"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IHeader {
    src: string;
    alt: string;
}

export const Header = ({ src, alt }: IHeader) => {
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setZoom(true);
            } else {
                setZoom(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call it initially to set the correct state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full min-h-[20vh] h-[400px] relative">
            <div className="w-full h-[100%] overflow-hidden relative ">
                <Image
                    src={src}
                    alt={alt}
                    fill={true}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        position: "absolute",
                        transform: zoom ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.5s ease"
                    }}
                />
                <div className="text-r-white bg-r-black bg-opacity-40 z-10 relative w-full h-full pointer-events-none">
                    <div className="flex justify-center m-auto">
                        <h2 className="opacity-100 text-5xl"></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};