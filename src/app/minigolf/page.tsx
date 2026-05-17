import { MiniGolfPricing } from "@/components/MiniGolfPricing";
import { Header } from "@/components/Header";
import { MapFrame } from "@/components/MapFrame";
import { PageBanner } from "@/components/PageBanner";
import { PageGrid } from "@/components/PageGrid";
import { PageGridItem } from "@/components/PageGridItem";
import { Spacer } from "@/components/Spacer";
import { FancyButton } from "@/components/FancyButton";

export default function Home() {
  return (
    <main>
      <div>
        <Header src="/img/outdoorminigolf1.png" alt="people playing golf" />
        <PageBanner title="Ruby's Paradise Mini Golf" subtitle="Now indoors and outdoors!" />
        <Spacer />
        <PageGrid>
          <PageGridItem>
            <MiniGolfPricing title="Indoor Mini Golf" />
            <div className="h-1" />
            <FancyButton href="/arcade" label="Boardwalk Station Hours" bgColour="bg-r-green  " />
          </PageGridItem>
          <PageGridItem className="mobile:order-3">
            <MiniGolfPricing title="Outdoor Mini Golf" />
            <div className="h-1" />
            <FancyButton href="/golf" label="Driving Range Hours" bgColour="bg-r-green" />
          </PageGridItem>
          <PageGridItem className="w-full px-5 mobile:order-2">
            <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca" />
          </PageGridItem>
          <PageGridItem className="w-full px-5 mobile:order-4">
            <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca" />
          </PageGridItem>
        </PageGrid>
        <Spacer />
      </div>
    </main>
  );
}
