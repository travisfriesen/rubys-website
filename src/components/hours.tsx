interface IHours {
    title: string;
    sun: string;
    mon: string;
    tues: string;
    weds: string;
    thurs: string;
    fri: string;
    sat: string;
}

export const Hours = ({title, sun, mon, tues, weds, thurs, fri, sat}: IHours) => {
    return (
        <div className=" rounded-2xl w-fit bg-r-blue h-180 p-8 tracking-wide flex flex-col space-between">
            <h1 className="text-4xl text-center pb-3 text-r-text">{title}</h1>
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
        </div>
    )
}