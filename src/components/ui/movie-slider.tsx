"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";
import { Movie, MovieSliderProps } from "@/types";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const movies: Movie[] = [
  {
    id: 1,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.5,
  },
  {
    id: 2,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.0,
  },
  {
    id: 3,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 3.5,
  },
  {
    id: 4,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.2,
  },
  {
    id: 5,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 3.8,
  },
  {
    id: 6,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.7,
  },
  {
    id: 7,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.1,
  },
  {
    id: 8,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 3.9,
  },
  {
    id: 9,
    title: "The Walk",
    image: "/images/movies/slider4.jpg",
    genre: ["Sci-fi", "Adventure"],
    rating: 4.3,
  },
];


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
            <div className="absolute bottom-8 ml-10 mb-10 left-2 text-xs text-white">
              <div className="w-max font-bold bg-[#1692bb] rounded-sm text-xs px-2 py-1">
                {movie?.genre[0]}
              </div>
              <Link href="/movies" className="font-bold mt-2 text-lg">{movie.title}</Link>
              <p className="flex text-lg">
                <IoStar className="text-[#f5b50a] w-5 h-5" />
                <span>{movie.rating}</span>/10
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
