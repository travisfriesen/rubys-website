import {FaFacebook, FaMapMarkerAlt} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-20 bg-r-footer-white flex text-r-black justify-evenly">
            <div className="m-auto text-r-black">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                © Copyright 2024 - 2025 Ruby's Paradise
            </div>
            <div className="m-auto flex gap-3 justify-evenly">
                <Link href="https://fb.me/rubyswinnipegbeach"><FaFacebook size={42}/></Link>
                <Link href="https://maps.app.goo.gl/enz8Cb5m26d3ymEPA"><FaMapMarkerAlt size={42}/></Link>

            </div>
            <div className="m-auto text-r-black">
                Contact us with any questions
                <div className="flex flex-col text-r-black">
                    <a href="tel:431-482-1913">(431) 482-1913</a>
                    <a href="mailto:contact@rubysmb.ca">contact@rubysmb.ca</a>
                </div>
            </div>


        </div>
    )
}
