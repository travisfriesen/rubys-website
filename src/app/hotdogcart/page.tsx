import { Hours } from "@/components/hours";
import { HotDogPricing } from "@/components/hotdogpricing";
import { Header } from "@/components/header";
import {MapFrame} from "@/components/mapframe";
import { Spacer } from "@/components/spacer";

export default function Home() {
  return (
    <main>
      <div>
          <Header src="/img/hotdogcart.jpg" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
            <h1 className="text-4xl pb-5 text-r-text">Hot Dog Cart</h1>
            <h2 className="text-2xl pb-2 text-r-text">At the farmers market!</h2>
              </div>
              <Spacer/>
              <div className="desktop-only grid grid-cols-2 grid-rows-2">
                  <div className="m-auto">
                      <Hours title="Hot Dog Cart Hours" sun="10am-3pm" mon="Closed" tues="Closed" weds="Closed" thurs="Closed" fri="Closed" sat="10am-3pm"/>
                  </div>
                  <div className="m-auto">
                    <HotDogPricing/>
                  </div>
                  <div className="m-auto w-full pl-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1455.5699504806764!2d-96.97417949025713!3d50.500009681638005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb01d7113bc7e1%3A0x253fb3637c1e9501!2sWinnipeg%20Beach%20Farmers%20Market!5e0!3m2!1sen!2sca!4v1724531915190!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                    </div>
              </div>
              <div className="mobile-only grid grid-rows-3">
                  <div className="m-auto">
                      <Hours title="Hot Dog Cart Hours" sun="10am-3pm" mon="Closed" tues="Closed" weds="Closed" thurs="Closed" fri="Closed" sat="10am-3pm"/>
                  </div>
                  <div className="m-auto">
                    <HotDogPricing/>
                  </div>
                  <div className="m-auto w-full pl-5 pr-5">
                    <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1455.5699504806764!2d-96.97417949025713!3d50.500009681638005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb01d7113bc7e1%3A0x253fb3637c1e9501!2sWinnipeg%20Beach%20Farmers%20Market!5e0!3m2!1sen!2sca!4v1724531915190!5m2!1sen!2sca"/>
                  </div>
                  <div className="m-auto">
                    </div>
              </div>
              <Spacer/>
              
      </div>
    </main>
  );
}
