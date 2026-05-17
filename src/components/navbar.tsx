import { Button } from "@/components/button";
import { MButton } from "@/components/mbutton";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="desktop-only h-20 bg-r-red w-full align-middle grid grid-cols-5 justify-center">
        <div className="flex justify-center">
          <img src="/rubys.svg" alt="Ruby's Paradise Logo" width={68} height={68} />
        </div>
        {}
        <div className="flex m-auto text-3xl">
          <Button href={"/"} label={"Ruby's Paradise"} />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-center justify-end gap-6 pr-10">
          <Button href="/golf" label="Golf" />
          <Button href="/minigolf" label="Mini Golf" />
          <Button href="/hotdogcart" label="Hot Dog Cart" />
          <Button href="/arcade" label="Boardwalk Station" />
        </div>
      </div>
      <div className="mobile-only h-20 bg-r-red w-full align-middle grid grid-cols-4 justify-center">
        <div className="flex justify-center">
          <img src="/rubys.svg" alt="Ruby's Paradise Logo" width={68} height={68} />
        </div>
        {}
        <div className="flex m-auto text-3xl">
          <Button href={"/"} label={"Ruby's Paradise"} />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1 inline-grid text-middle">
          <button onClick={handleClick} className="flex m-auto justify-center">
            <FaBars size={32} />
          </button>
        </div>
      </div>
      <div
        className={`mobile-only absolute inline-grid grid-rows-4 bg-r-red w-full justify-center pointer-events-none ${isOpen ? "z-10" : "z--10"}`}
      >
        <div
          className={`row-span-1 h-16 m-auto content-center [pointer-events:all] ${isOpen ? "z-20" : "z--10"}`}
        >
          <MButton href="/golf" label="Golf" />
        </div>
        <div
          className={`row-span-1 h-16 m-auto content-center [pointer-events:all] ${isOpen ? "z-20" : "z--10"}`}
        >
          <MButton href="/minigolf" label="Mini Golf" />
        </div>
        <div
          className={`row-span-1 h-16 m-auto content-center [pointer-events:all] ${isOpen ? "z-20" : "z--10"}`}
        >
          <MButton href="/hotdogcart" label="Hot Dog Cart" />
        </div>
        <div
          className={`row-span-1 h-16 m-auto content-center [pointer-events:all] ${isOpen ? "z-20" : "z--10"}`}
        >
          <MButton href="/arcade" label="Boardwalk Station" />
        </div>
      </div>
    </div>
  );
}
