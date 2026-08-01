import { Spacer } from "./Spacer";
import pricesData from "@/data/prices.json";

export const GolfPricing = () => {
  const drivingRangePricing = pricesData.drivingRange;

  return (
    <div className="pl-5 pr-5">
      <div className=" rounded-2xl w-full h-full bg-r-black p-8 tracking-wide flex flex-col">
        <h1 className="text-4xl text-center pb-3 text-r-text">{drivingRangePricing.title}</h1>
        <div className="grid grid-cols-2">
          <div className="text-r-text">
            {drivingRangePricing.items.map((item) => (
              <div key={item.label}>
                {item.label}: <br />
              </div>
            ))}
          </div>
          <div className="text-right text-r-text">
            {drivingRangePricing.items.map((item) => (
              <div key={item.label}>
                {item.price} <br />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-5">
          <Spacer />
          <p className="italic">{drivingRangePricing.notice}</p>
        </div>
      </div>
    </div>
  );
};
