import React from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <section
      className={
        "md:mt-16 mt-12  w-full gap-5 justify-between flex flex-col bg-[#272727] border-[#A9ACB8] dark:bg-secBlue dark:border-grey2"
      }
    >
      <div className="justify-evenly relative max-w-screen-xl xl:max-w-screen-2xl w-full md:mx-auto text-white font-pop flex gap-5 md:gap-10 py-4 md:py-10 px-5 flex-wrap items-center md:items-start">
        <div className="flex justify-center items-center text-3xl text-white font-bold">
          Logo
        </div>
        <div className="flex gap-5 w-full md:hidden justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl select-none font-bold">About Us</h3>
            <ul className="flex gap-2 flex-col">
              <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
                <Link title="Contact Us" href={"/contacts"}>Contact Us</Link>
              </li>
              <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
                <Link title="Terms Of Use" href="/terms-and-conditions">Terms Of Use</Link>
              </li>
              <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
                <Link title="Help & Supports" href="/contacts">Help & Supports</Link>
              </li>
              <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
                <Link title="Return Policy" href="/return-policy">Return Policy</Link>
              </li>
              <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
                <Link title="Privacy" href="/privacy-and-policy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3 ">
          <h3 className="text-2xl select-none font-bold">About Us</h3>
          <ul className="flex gap-2 flex-col">
            <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
              <Link title="Contact Us" href={"/contacts"}>Contact Us</Link>
            </li>
            <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
              <Link title="Terms Of Use" href="/terms-and-conditions">Terms Of Use</Link>
            </li>
            <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
              <Link title="Help & Supports" href="/contacts">Help & Supports</Link>
            </li>
            <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
              <Link title="Return Policy" href="/return-policy">Return Policy</Link>
            </li>
            <li className="text-md font-normal hover:underline underline-offset-2 cursor-pointer transition-all duration-400 ">
              <Link title="Privacy" href="/privacy-and-policy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl select-none font-bold">Contact Us</h3>
          <ul className="flex gap-3 flex-col">
            <li className="flex items-center gap-3">
              <div className="text-3xl">
                <LuPhone />
              </div>
              <div className="flex items-start flex-col">
                <h4 className="font-bold text-md">Phone</h4>
                <Link href="tel:+917015115557" title="Contact Number">
                  <p className="text-md font-normal">+91 7015115557</p>
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-3xl">
                <HiOutlineMail />
              </div>
              <div className="flex items-start flex-col">
                <h4 className="font-bold font-md">Email</h4>
                <Link href="mailto:support@bizzyKa.com" title="Contact Email">
                  <p className="text-md  font-normal">support@bizzyKa.com</p>
                </Link>
              </div>
            </li>
            <li className="text-md flex items-center gap-3">
              <div className="text-3xl">
                <IoLocationOutline />
              </div>

              <div className="flex items-start flex-col">
                <h4 className="font-bold">Bizzyka</h4>
                <Link
                  title="Contact Address"
                  href="https://www.google.com/maps/search/2841+Sector-22C,+Chandigarh,+Chandigarh+160022,+IN/@30.7327708,76.7661264,16z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                >
                  <p className="text-md font-normal">
                    2841 Sector-22C, Chandigarh, Chandigarh 160022, IN
                  </p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5  items-stretch w-svw md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 rounded-md p-3 font-bold text-gray-500"
          />
          <button className="bg-[#bdfbe6] text-black rounded-md py-3 px-10 md:px-auto">
            Get Started
          </button>

          <h3 className="font-bold text-2xl">Follow Us</h3>
          <div className="flex gap-8  text-3xl justify-evenly">
            <Link href="https://twitter.com/bizzy_ka" target="_blank" title="Twitter">
              <SiTwitter
                className={"hover:text-[#1DA1F2] transition-all duration-300"}
              />
            </Link>
            <Link
              title="LinkedIn"
              href={"https://www.linkedin.com/company/bizzyka"}
              target="_blank"
            >
              <SiLinkedin
                className={"hover:text-[rgb(0,119,181)] transition-all duration-300"}
              />
            </Link>
            <Link
              title="Instagram"
              href={"https://www.instagram.com/bizzyka"}
              target="_blank"
            >
              <SiInstagram
                className={"hover:text-[#d62976] transition-all duration-300"}
              />
            </Link>
            <Link title="Facebook" href="https://www.facebook.com/bizzyka" target="_blank">
              <SiFacebook
                className={"hover:text-[#316FF6] transition-all duration-300"}
              />
            </Link>
            <Link title="YouTube" href="https://www.youtube.com/@BizzyKa" target="_blank">
              <SiYoutube
                className={"hover:text-[#CD201F] transition-all duration-300 "}
              />
            </Link>
            <Link title="WhatsApp" href={"https://wa.me/917015115757"} target="_blank">
              <IoLogoWhatsapp
                className={"hover:text-[#25D366] transition-all duration-300"}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-wrap gap-4 md:gap-0 justify-center text-center  items-center p-8">
        <p className={`text-[#FAFAFA] dark:text-grey3 font-bold  md:text-md`}>
          Copyright © All Right Reserved | Powered By BizzyKa
        </p>
      </div>
    </section>
  );
}