import { MiniGolfPricing } from "@/components/minigolfpricing";
import { GolfPricing } from "@/components/golfpricing";
import { Header } from "@/components/header";
import {MapFrame} from "@/components/mapframe";
import { Spacer } from "@/components/spacer";
import hoursData from "@/data/driving_range_hours.json";
import {Hours} from "@/components/hours";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
          <div className="bg-r-blue pl-6 pr-6 text-center m-auto pt-20 pb-20">
            <h1 className="text-4xl pb-5 text-r-text">The Beach House - For Rent</h1>
            <h2 className="text-2xl pb-2 text-r-text">Call for details and inquiries</h2>
              </div>
              <Spacer/>
              <div className="desktop-only grid grid-cols-2 grid-rows-2">
                  {/*<Image*/}
                  {/*    src={`/img/house.png`}*/}
                  {/*    alt={`A picture of a flyer about the beach house for rent`}*/}
                  {/*    fill={true}/>*/}
              </div>

              <div className="mobile-only grid grid-rows-4">
              </div>

              <Spacer/>
              
      </div>
    </main>
  );
}
