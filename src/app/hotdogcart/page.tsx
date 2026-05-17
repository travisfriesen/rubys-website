import { Hours } from "@/components/Hours";
import { HotDogPricing } from "@/components/HotDogPricing";
import { Header } from "@/components/Header";
import { MapFrame } from "@/components/MapFrame";
import { PageBanner } from "@/components/PageBanner";
import { PageGrid } from "@/components/PageGrid";
import { PageGridItem } from "@/components/PageGridItem";
import { Spacer } from "@/components/Spacer";
import hoursData from "@/data/hotdog_cart_hours.json";

export default function Home() {
  return (
    <main>
      <div>
        <Header src="/img/hotdogcart.jpg" alt="people playing golf" />
        <PageBanner title="Hot Dog Cart" subtitle="At the farmers market!" />
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
            <HotDogPricing />
          </PageGridItem>
          <PageGridItem className="w-full desktop:pl-5 mobile:px-5">
            <MapFrame href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1455.5699504806764!2d-96.97417949025713!3d50.500009681638005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52eb01d7113bc7e1%3A0x253fb3637c1e9501!2sWinnipeg%20Beach%20Farmers%20Market!5e0!3m2!1sen!2sca!4v1724531915190!5m2!1sen!2sca" />
          </PageGridItem>
        </PageGrid>
        <Spacer />
      </div>
    </main>
  );
}
