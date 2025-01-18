"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { Movie, MovieSliderProps } from "@/types";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { movies } from "@/lib/data";

const Slider = dynamic(() => import("react-slick"), { ssr: false });


const MovieSlider: React.FC<MovieSliderProps> = ({ autoplay = true, layout = "bottom", width = "220px", height = "340px" }) => {
  const isMobile = useIsMobile()

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    dotsClass: `slick-dots ${
      layout === "top" ? "slick-dots-top" : "slick-dots-bottom"
    }`,
    arrows: false,
  };
  
  
  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className={`p-5 py-0 mt-5 flex justify-center items-center w-full`}
        >
          <div
            className={`movie-card uppercase bg-cover relative z-50 max-xs:w-full w-[${width}] h-[${height}]`}
            style={{
              backgroundImage: `url(${movie.image})`,
              width: width,
              height: height,
              margin: layout === 'top' ? '' : '0 auto', // Center the image
            }}
          >
            <div className={`absolute bottom-8 left-2 text-xs text-white  ${layout === 'bottom' && 'ml-10 mb-10'}`}>
              <div className="w-max font-bold bg-[#1692bb] rounded-sm text-xs px-2 py-1">
                {movie?.genre?.[0] ?? 'Others'}
              </div>
              <Link href="/movies" className="font-bold mt-2 text-lg">{movie.title}</Link>
               <div className="text-sm flex items-center ">
                  <IoStar className="text-[#f5b50a]" size={20} />
                  <p className="inline ml-1 mt-1"> <span className="text-lg text-white font-nunito">8.1</span>/10</p>
               </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
