import { Spacer } from "./spacer"

export const GolfPricing = () => {
    return (
        <div className=" rounded-2xl w-fit bg-r-black h-180 p-8 tracking-wide flex flex-col space-between">
            <h1 className="text-4xl text-center pb-3 text-r-text">Driving Range Pricing</h1>
            <div className="grid grid-cols-2">
                <div className="text-r-text">
            Small (26 balls): <br/>
            Medium (52 balls): <br/>
            Large (104 balls): <br/>
                </div>
                <div className="text-right text-r-text">
                    $6 <br/>
                    $12 <br/>
                    $22 <br/>
                </div>
        </div>
        <Spacer/>
        <p className="italic">Buy 10 buckets and get your 11th bucket free!</p>
        </div>
    )
}