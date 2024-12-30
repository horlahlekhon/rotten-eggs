import React from "react";
import MovieSlider from "@/components/ui/movie-slider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/types";

interface MovieTabProps {
  title: string;
  link: string;
  movies?: Movie[];
}

export const MovieTab: React.FC<MovieTabProps> = ({ title, link }) => {
  return (
    <div className="py-16">
      <div className="mb-6 flex justify-between items-center uppercase">
        <h2 className="text-white text-2xl">{title}</h2>
        <Link href={link} className="flex items-center">
          View all <ChevronRight size={14} />
        </Link>
      </div>

      <div className="tabs mb-10">
        <ul className="tab-links max-lg:space-y-4 font-bold lg:flex lg:space-x-4">
          <li>
            <a href="#tab1">#Popular</a>
          </li>
          <li>
            <a href="#tab2"> #Coming soon</a>
          </li>
          <li>
            <a href="#tab3"> #Top rated </a>
          </li>
          <li>
            <a href="#tab4"> #Most reviewed</a>
          </li>
        </ul>
        <div className="mt-14">
          <MovieSlider
            autoplay={false}
            layout="top"
            width="160px"
            height="250px"
          />
        </div>
      </div>
    </div>
  );
};
