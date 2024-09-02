/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full relative pt-20 pb-20" id="contact">
      <div className="w-full absolute left-0 bottom-0 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-90"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] z-10">
          Ready to take <span className="text-purple">your </span>digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 z-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:jeerasak.code@gmail.com">
          <MagicButton
            title="Let's get in touch"
            position="right"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 sm:gap-0">
        <p className="md:text-base text-sm md:font-normal font-light z-10">
          Copyright © 2024 Jeerasak
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-blue-300">
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
