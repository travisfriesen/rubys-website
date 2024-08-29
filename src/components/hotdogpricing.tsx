import { Spacer } from "./spacer"

export const HotDogPricing = () => {
    return (
        <div className=" rounded-2xl w-fit bg-r-black h-180 p-8 tracking-wide flex flex-col space-between">
            <h1 className="text-4xl text-center pb-3 text-r-text">Hot Dog Cart Pricing</h1>
            <div className="grid grid-cols-2 text-r-text">
                <div>
            Hotdog: <br/>
            Smokies: <br/>
            Burger: <br/>
            Chips: <br/>
            Pop: <br/>
            Drink: <br/>
                </div>
                <div className="text-right text-r-text">
                    $6 <br/>
                    $8 <br/>
                    $10 <br/>
                    $2 <br/>
                    $2 <br/>
                    $1 <br/>
                </div>
        </div>
        </div>
    )
}