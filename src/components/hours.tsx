import {Spacer} from "@/components/spacer";

interface IHours {
    title: string;
    seasonally_closed?: boolean;
    sun: string;
    mon: string;
    tues: string;
    weds: string;
    thurs: string;
    fri: string;
    sat: string;
    showNotice?: boolean;
    notice?: string;
}

export const Hours = ({title, seasonally_closed, sun, mon, tues, weds, thurs, fri, sat, showNotice, notice}: IHours) => {
    return (
        <div className="pr-5 pl-5">
            <div className="rounded-2xl w-fit bg-r-blue h-180 p-8 tracking-wide flex flex-col space-between">
                <h1 className="text-4xl text-center pb-3 text-r-text">{title}</h1>
                {seasonally_closed ? (
                    <div>
                        <h3 className="text-2xl text-r-text">Seasonally Closed</h3>
                    </div>
                ) : (
                    <div className="grid grid-cols-2">
                        <div className="text-r-text">
                            Sunday: <br/>
                            Monday: <br/>
                            Tuesday: <br/>
                            Wednesday: <br/>
                            Thursday: <br/>
                            Friday: <br/>
                            Saturday: <br/>
                        </div>
                        <div className="text-right text-r-text">
                            {sun} <br/>
                            {mon} <br/>
                            {tues} <br/>
                            {weds} <br/>
                            {thurs} <br/>
                            {fri} <br/>
                            {sat} <br/>
                        </div>
                    </div>
                )}
                {showNotice && (
                    <div>
                        <Spacer/>
                        <p className="italic">{notice}</p>
                    </div>
                    )}
            </div>
        </div>
    )
}