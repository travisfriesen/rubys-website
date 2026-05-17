import { MiniGolfPricing } from "@/components/MiniGolfPricing";
import { GolfPricing } from "@/components/GolfPricing";
import { Header } from "@/components/Header";
import { MapFrame } from "@/components/MapFrame";
import { PageBanner } from "@/components/PageBanner";
import { PageGrid } from "@/components/PageGrid";
import { PageGridItem } from "@/components/PageGridItem";
import { Spacer } from "@/components/Spacer";
import hoursData from "@/data/driving_range_hours.json";
import { Hours } from "@/components/Hours";

export default function Home() {
  return (
    <main>
      <div>
        <Header src="/img/golf.jpg" alt="people playing golf" />
        <PageBanner
          title="Ruby's Paradise Driving Range"
          subtitle="Featuring Golf, Mini Golf, Club Rentals, and Snacks"
        />
        <Spacer />
        <PageGrid>
          <PageGridItem>
            <Hours
              title={hoursData.title}
              seasonally_closed={hoursData.seasonallyClosed}
              sun={hoursData.sunday}
              mon={hoursData.monday}
              tues={hoursData.tuesday}
              weds={hoursData.wednesday}
              thurs={hoursData.thursday}
              fri={hoursData.friday}
              sat={hoursData.saturday}
              showNotice={hoursData.showNotice}
              notice={hoursData.notice}
            />
          </PageGridItem>
          <PageGridItem>
            <GolfPricing />
          </PageGridItem>
          <PageGridItem className="w-full desktop:pl-5 mobile:px-5 mobile:order-4">
            <MapFrame href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.078493878569!2d-96.97289645010515!3d50.49444421292229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb013cffb7503f%3A0x97a053ab76f9aaa9!2sRuby&#39;s%20Paradise!5e0!3m2!1sen!2sca!4v1719853007430!5m2!1sen!2sca" />
          </PageGridItem>
          <PageGridItem className="mobile:order-3">
            <MiniGolfPricing title="Outdoor Mini Golf" />
          </PageGridItem>
        </PageGrid>
        <Spacer />
      </div>
    </main>
  );
}
