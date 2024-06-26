import Image from "next/image";

export default function Header() {
    return(
        <div className="w-full min-h-[20vh] h-[400px] relative">
            <div className="w-full h-[100%] overflow-hidden relative">
                <Image src="/golf.jpg" alt="golf" fill sizes="100vw" style={{position: "absolute", width: '100%', height: "100%"}}/>
                <div className="text-r-white bg-r-black bg-opacity-40 z-10 relative w-full h-full ">
                    <div className="flex justify-center m-auto">
                    <h2 className="opacity-100 text-5xl">Text</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}