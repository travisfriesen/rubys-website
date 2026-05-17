import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-20 bg-r-footer-white flex text-r-black justify-evenly">
      <div className="m-auto text-r-black">{}© Copyright 2024 - 2026 Ruby's Paradise</div>
      <div className="m-auto flex gap-3 justify-evenly">
        <a href="https://fb.me/rubyswinnipegbeach" target="_blank" rel="noreferrer">
          <FaFacebook size={42} />
        </a>
        <a href="https://maps.app.goo.gl/enz8Cb5m26d3ymEPA" target="_blank" rel="noreferrer">
          <FaMapMarkerAlt size={42} />
        </a>
      </div>
      <div className="m-auto text-r-black">
        Contact us with any questions
        <div className="flex flex-col text-r-black">
          <a href="tel:431-482-1913">(431) 482-1913</a>
          <a href="mailto:contact@rubysmb.ca">contact@rubysmb.ca</a>
        </div>
      </div>
    </div>
  );
}
