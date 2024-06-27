import {Button} from "@/components/button";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="h-20 bg-r-red w-full align-middle grid grid-cols-6 justify-center">
                <div className="flex justify-center">
                    <Image src="/rubys.svg" alt="Ruby's Paradise Logo" width={75} height={75}></Image>
                </div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div className="flex m-auto text-3xl">
                    <Button href={"/"} label={"Ruby's Paradise"}/>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2 inline-grid grid-cols-3">
                    <Button href="/golf" label="Golf"/>
                    <Button href="/hotdogcart" label="Hot Dog Cart"/>
                    <Button href="/arcade" label="Boardwalk Station"/>
                </div>
        </div>

    );
}