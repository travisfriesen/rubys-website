import Image from "next/image";

interface IHeader {
    src: string;
    alt: string;
}

export const Header = ({src, alt}: IHeader) => {
    return(
        <div className="w-full min-h-[20vh] h-[400px] relative">
            <div className="w-full h-[100%] overflow-hidden relative">
                <Image src={src} alt={alt} fill sizes="100vw" style={{position: "absolute", width: '100%', height: "100%"}}/>
                <div className="text-r-white bg-r-black bg-opacity-40 z-10 relative w-full h-full ">
                    <div className="flex justify-center m-auto">
                    <h2 className="opacity-100 text-5xl"></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}