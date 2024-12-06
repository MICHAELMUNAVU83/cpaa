import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#A90100] text-white mt-16 py-12">
      <div className="w-[80%] mx-auto grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img
                src="/Center for Pan African Affairs. Logo.jpeg"
                className="h-[150px] md:h-[300px] object-contain"
                alt="logo"
              />
            </div>
          </div>
          <p className="libre-baskerville-regular">
            Towards a united, peaceful and prosperous Africa
          </p>
        </div>

        <div className="flex items-start">
          <div className="flex josefin-sans-regular flex-col gap-3">
            <p className="libre-baskerville-bold text-[30px]">Pages</p>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="#news">News & Events</Link>
          </div>
        </div>

        <div className="flex josefin-sans-regular flex-col gap-2">
          <p className="libre-baskerville-bold text-[30px]">Contact</p>
          <a
            href="https://www.google.com/maps/place/WANA+NDEGE+FLATS,KIRICHWA+LANE+NAIROBI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WANA NDEGE FLATS, KIRICHWA LANE, NAIROBI
          </a>
          <a href="tel:+254733374727" className="hover:underline">
            +254-733-374-727
          </a>
          <a href="mailto:info@cpaa.org" className="hover:underline">
            info@cpaa.org
          </a>
        </div>

        <div className="flex items-start flex-col gap-4">
          <p className="libre-baskerville-bold text-[30px]">Social Media</p>
          <div className="flex gap-3 items-center">
            <a
              href="https://www.facebook.com/PanAfricanCongressKenya?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <RiFacebookCircleLine size={23} /> <p>Facebook</p>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="https://x.com/PanAfricanKe?t=aNEyx9uI4YuBDT5aS-lFVA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <FaTwitter size={23} /> <p>Twitter</p>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="https://www.instagram.com/panafricanke?igsh=bWtkd3BhbnFueWdo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <BsInstagram size={23} /> <p>Instagram</p>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <FaLinkedin size={23} /> <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
