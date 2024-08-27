interface IHours {
    title: string;
}

export const MiniGolfPricing = ({title}: IHours) => {
    return (
        <div className=" rounded-2xl w-fit bg-r-green h-180 p-8 tracking-wide flex flex-col space-between">
            <h1 className="text-4xl text-center pb-3">{title}</h1>
            <div className="grid grid-cols-2">
                <div>
            Adult (13+): <br/>
            Kid (12 and under): <br/>
            Family (2 adult + 2 kid) <br/>
                </div>
                <div className="text-right">
                    $8 <br/>
                    $6 <br/>
                    $26 <br/>
                </div>
        </div>
        </div>
    )
}