import { Spacer } from "./spacer";

export const HotDogPricing = () => {
  return (
    <div className="pl-5 pr-5">
      <div className=" rounded-2xl w-fit bg-r-black h-180 p-8 tracking-wide flex flex-col space-between">
        <h1 className="text-4xl text-center pb-3 text-r-text">
          Hot Dog Cart Pricing
        </h1>
        <div className="grid grid-cols-2 text-r-text">
          <div>
            Hotdog: <br />
            Burger: <br />
            Veggie Burger: <br />
            Chips: <br />
            Pop: <br />
            Water: <br />
          </div>
          <div className="text-right text-r-text">
            $7 <br />
            $10 <br />
            $8 <br />
            $2 <br />
            $2.25 <br />
            $1.25 <br />
          </div>
        </div>
      </div>
    </div>
  );
};

