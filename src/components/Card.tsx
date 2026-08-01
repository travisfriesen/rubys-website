import { FancyButton } from "@/components/FancyButton";

interface ICard {
  title: string;
  desc: string;
  link: string;
}

export const Card = ({ title, desc, link }: ICard) => {
  return (
    <div className=" rounded-2xl w-full h-full bg-r-blue p-8 tracking-wide flex flex-col">
      <h1 className="text-r-text text-4xl text-center pb-3 text-r-text">{title}</h1>
      <br />
      <p className="text-r-text text-r-text">{desc}</p>
      <div className="self-center mt-auto pt-5">
        <FancyButton href={link} label="Learn More"></FancyButton>
      </div>
    </div>
  );
};
