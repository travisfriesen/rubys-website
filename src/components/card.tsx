import {FancyButton} from "@/components/fancybutton";

interface ICard {
    title: string;
    desc: string;
    link: string;
}

export const Card = ({title, desc, link}: ICard) => {
    return (
        <div className=" rounded-2xl w-full bg-r-blue h-180 p-8 tracking-wide flex flex-col space-between">
            <h1 className="text-4xl text-center pb-3">{title}</h1>
            <br/>
                 <p>{desc}</p>
            <br/>
            <div className="self-center sticky top-full mt-5">
                <FancyButton href={link} label="Learn More"></FancyButton>
            </div>
        </div>
    )
}