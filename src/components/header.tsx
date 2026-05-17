interface IHeader {
  src: string;
  alt: string;
}

export const Header = ({ src, alt }: IHeader) => {
  return (
    <div className="relative w-full h-[40vw] min-h-[200px] max-h-[400px] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-r-black bg-opacity-40" />
    </div>
  );
};
