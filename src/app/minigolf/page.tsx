import { Hours } from "@/components/hours";
import { MiniGolfPricing } from "@/components/minigolfpricing";
import { GolfPricing } from "@/components/golfpricing";
import { Header } from "@/components/header";
import {MapFrame} from "@/components/mapframe";
import { Spacer } from "@/components/spacer";
import { FancyColouredButton } from "@/components/fancycolouredbutton";

export default function Home() {
  return (
    <main>
      <div>
          <Header src="/img/outdoorminigolf1.png" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
            
            <h1 className="text-4xl pb-5 text-r-text">Ruby's Paradise Mini Golf</h1>
            <h2 className="text-2xl pb-2 text-r-text">Now indoors and outdoors!</h2>
              </div>
              <Spacer/>
              <div className="desktop-only grid grid-cols-2 grid-rows-2">
                  <div className="m-auto">
                    <MiniGolfPricing title="Indoor Mini Golf"/>
                    <div className="h-1"/>
                    <FancyColouredButton href="/arcade" label="Boardwalk Station Hours" bgcolour="bg-r-green  "/>
                  </div>
                  <div className="m-auto">
                    <MiniGolfPricing title="Outdoor Mini Golf"/>
                    <div className="h-1"/>
                    <FancyColouredButton href="/golf" label="Driving Range Hours" bgcolour="bg-r-green"/>
                    </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca"/>
                  </div>
              </div>

              <div className="mobile-only grid grid-rows-4">
                  <div className="m-auto">
                    <MiniGolfPricing title="Indoor Mini Golf"/>
                    <div className="h-1"/>
                    <FancyColouredButton href="/arcade" label="Boardwalk Station Hours" bgcolour="bg-r-green  "/>
                  </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                    <MiniGolfPricing title="Outdoor Mini Golf"/>
                    <div className="h-1"/>
                    <FancyColouredButton href="/golf" label="Driving Range Hours" bgcolour="bg-r-green"/>
                    </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca"/>
                  </div>
              </div>
              <Spacer/>
          </div>
    </main>
  );
}
