import { Hours } from "@/components/hours";
import { Header } from "@/components/header";
import {MapFrame} from "@/components/mapframe";

export default function Home() {
  return (
    <main>
      <div>
          <Header src="/golf.jpg" alt="people playing golf"/>
          <div className="bg-r-green pl-6 pr-6 text-center m-auto pt-20 pb-20">
              </div>
              <div className="grid grid-cols-2">
                  <div className="m-auto">
                      <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca"/>
                  </div>
                  <div>
                      <Hours title="golf hours" sun="12pm-7pm" mon="3pm-6:30pm" tues="3pm-6:30pm" weds="Closed" thurs="3pm-6:30pm" fri="1pm-7pm" sat="12pm-7pm"/>
                  </div>
              </div>
      </div>
    </main>
  );
}
