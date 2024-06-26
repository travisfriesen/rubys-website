interface ICard {
    title: string;
    desc: string;
    link: string;
}

export const Card = ({title, desc, link}: ICard) => {
    return (
        <div className=" rounded-2xl w-full bg-r-blue h-20 p-2">
            <h1>{title}</h1>
                 <p>{desc}</p>
            <a href={link}>Learn More</a>

        </div>
    )
}