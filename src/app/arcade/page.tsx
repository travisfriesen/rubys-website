import { Hours } from "@/components/Hours";
import { MiniGolfPricing } from "@/components/MiniGolfPricing";
import { Header } from "@/components/Header";
import { MapFrame } from "@/components/MapFrame";
import { PageBanner } from "@/components/PageBanner";
import { PageGrid } from "@/components/PageGrid";
import { PageGridItem } from "@/components/PageGridItem";
import { Spacer } from "@/components/Spacer";
import hoursData from "@/data/boardwalk_station_hours.json";

export default function Home() {
  return (
    <main>
      <div>
        <Header src="/img/boardwalkstation.jpg" alt="people playing golf" />
        <PageBanner
          title="Boardwalk Station"
          subtitle="Featuring Arcade Games, Pool Tables, Mini Golf, Snacks and more!"
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
            <MiniGolfPricing title="Indoor Mini Golf" />
          </PageGridItem>
          <PageGridItem className="w-full desktop:pl-5 mobile:px-5">
            <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d634.4899545263833!2d-96.9667399!3d50.4977056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb00698d648c17%3A0x6dec179eb3141e62!2sBoardwalk%20Station%20Arcade!5e0!3m2!1sen!2sca!4v1724526615599!5m2!1sen!2sca" />
          </PageGridItem>
        </PageGrid>
        <Spacer />
      </div>
    </main>
  );
}
