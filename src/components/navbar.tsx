"use client";
import {Button} from "@/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        <div className="desktop-only h-20 bg-r-red w-full align-middle grid grid-cols-6 justify-center">
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
        <div className="mobile-only h-20 bg-r-red w-full align-middle grid grid-cols-4 justify-center">
                <div className="flex justify-center">
                    <Image src="/rubys.svg" alt="Ruby's Paradise Logo" width={75} height={75}></Image>
                </div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div className="flex m-auto text-3xl">
                    <Button href={"/"} label={"Ruby's Paradise"}/>
                </div>
                <div className="col-span-1">
                    <button onClick={handleClick} className="h-10 w-10 bg-r-blue"/>
                </div>
        </div>
        <div className={`mobile-only absolute inline-grid grid-rows-3 bg-r-red w-full align-middle justify-center ${isOpen ? 'z-10' : 'z--10'}`}>
            <div className="row-span-1 h-16 m-auto">
                <Button href="/golf" label="Golf"/>
            </div>
            <div className="row-span-1 h-16 m-auto">
                <Button href="/hotdogcart" label="Hot Dog Cart"/>
            </div>
            <div className="row-span-1 h-16 m-auto">
                <Button href="/arcade" label="Boardwalk Station"/>
            </div>
        </div>
        </div>
    );
}