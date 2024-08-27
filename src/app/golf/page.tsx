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
          <Header src="/img/golf.jpg" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
            <h1 className="text-4xl pb-5">Ruby's Paradise Driving Range</h1>
            <h2 className="text-2xl pb-2">Featuring Golf, Mini Golf, Club Rentals, and Snacks</h2>
              </div>
              <Spacer/>
              <div className="desktop-only grid grid-cols-2 grid-rows-2">
                  <div className="m-auto">
                      <Hours title="Driving Range Hours" sun="11am-5pm" mon="3pm-5:30pm" tues="3pm-5:30pm" weds="Closed" thurs="3pm-5:30pm" fri="1pm-5:30pm" sat="11am-5pm"/>
                  </div>
                  <div className="m-auto">
                    <GolfPricing/>
                  </div>
                  <div className="m-auto w-full pl-5">
                      <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                  <MiniGolfPricing title="Outdoor Mini Golf"/>
                    </div>
                  
              </div>

              <div className="mobile-only grid grid-rows-4">
                  <div className="m-auto">
                      <Hours title="Driving Range Hours" sun="11am-5pm" mon="3pm-5:30pm" tues="3pm-5:30pm" weds="Closed" thurs="3pm-5:30pm" fri="1pm-5:30pm" sat="11am-5pm"/>
                  </div>
                  <div className="m-auto">
                    <GolfPricing/>
                  </div>
                  <div className="m-auto">
                  <MiniGolfPricing title="Outdoor Mini Golf"/>
                    </div>
                  <div className="m-auto w-full pr-5 pl-5">
                      <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca"/>
                  </div>                  
              </div>
              <Spacer/>
              
      </div>
    </main>
  );
}
