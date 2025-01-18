import React from "react";
import MovieSlider from "@/components/ui/movie-slider";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { LucideSearch } from "lucide-react";
import { ReactNode } from "react";

interface HeroProps {
children: ReactNode;
bgImg?: string;
}

const Hero:React.FC<HeroProps> = ({ children, bgImg }) => {
  return (
    <div 
    style={{ backgroundImage: `url(${bgImg || '/images/slider-bg.jpg'})` }}
    className="slider bg-cover bg-center bg-no-repeat text-center relative max-lg:pt-52 pt-28 flex items-center md:pb-0">
      <div className="mx-auto sm:px-24 w-full">
        <div className="top-search w-full max-lg:hidden text-sm h-12 flex items-center space-x-2 mt-4 bg-[#233a50] border-4 border-[#020d18] rounded-md">
          <select className="w-[20%] uppercase rounded px-2 py-1 bg-[#233a50] outline-none">
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </select>
          <div className="border-l border-[#020d18] p-0 flex-grow relative">
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
              className="bg-[#233a50] outline-none px-2 py-1 w-full"
            />
            <div className="absolute text-white pr-5 top--1 bottom-0 right-0">
              <LucideSearch size={30} />
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Hero;
