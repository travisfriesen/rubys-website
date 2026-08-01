import { Spacer } from "./Spacer";
import pricesData from "@/data/prices.json";

export const HotDogPricing = () => {
  const hotDogPricing = pricesData.hotDogCart;

  return (
    <div className="pl-5 pr-5">
      <div className=" rounded-2xl w-full h-full bg-r-black p-8 tracking-wide flex flex-col">
        <h1 className="text-4xl text-center pb-3 text-r-text">{hotDogPricing.title}</h1>
        <div className="grid grid-cols-2 text-r-text">
          <div className="text-r-text">
            {hotDogPricing.items.map((item) => (
              <div key={item.label}>
                {item.label}: <br />
              </div>
            ))}
          </div>
          <div className="text-right text-r-text">
            {hotDogPricing.items.map((item) => (
              <div key={item.label}>
                {item.price} <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
