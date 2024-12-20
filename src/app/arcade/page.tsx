import { Hours } from "@/components/hours";
import { MiniGolfPricing } from "@/components/minigolfpricing";
import { GolfPricing } from "@/components/golfpricing";
import { Header } from "@/components/header";
import {MapFrame} from "@/components/mapframe";
import { Spacer } from "@/components/spacer";

export default function Home() {
  return (
    <main>
      <div>
          <Header src="/img/boardwalkstation.jpg" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
            <h1 className="text-4xl pb-5 text-r-text">Boardwalk Station</h1>
            <h2 className="text-2xl pb-2 text-r-text">Featuring Arcade Games, Pool Tables, Mini Golf, Snacks and more!</h2>
              </div>
              <Spacer/>
              <div className="desktop-only grid grid-cols-2 grid-rows-2">
                  <div className="m-auto">
                      <Hours title="Boardwalk Station Hours" sun="12pm-8pm" mon="3pm-8pm" tues="3pm-8pm" weds="Closed" thurs="3pm-8pm" fri="12pm-8pm" sat="12pm-8pm"/>
                  </div>
                  <div className="m-auto">
                    <MiniGolfPricing title="Indoor Mini Golf"/>
                  </div>
                  <div className="m-auto w-full pl-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                    </div>
              </div>
              <div className="mobile-only grid grid-rows-3">
                  <div className="m-auto">
                      <Hours title="Boardwalk Station Hours" sun="12pm-8pm" mon="3pm-8pm" tues="3pm-8pm" weds="Closed" thurs="3pm-8pm" fri="12pm-8pm" sat="12pm-8pm"/>
                  </div>
                  <div className="m-auto">
                    <MiniGolfPricing title="Indoor Mini Golf"/>
                  </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                    </div>
              </div>
              <Spacer/>
              
      </div>
    </main>
  );
}
