import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";

interface MovieCardProps {
  isGridView?: boolean;
  movie: Movie;
}


export const MovieCard:React.FC<MovieCardProps> = ({ isGridView, movie }) => {
  return (
    <div
      className={`grid grid-cols-1 max-xs:w-full max-md:w-[300px] max-lg:mx-auto gap-4 ${isGridView ? 'lg:grid-cols-[170px] mt-5' : 'md:grid-cols-[170px_1fr] my-10'}`}
    >
      <div className="movie-card mx-auto w-full max-lg:w-[170px] h-[260px] relative">
        <Image
          src={movie.image || 'placeholder.jpg'}
          alt="movie"
          className="rounded-md"
          fill={true}
        />
      </div>

      {isGridView ? (
        <div className="movie-card-content py-2 w-2/4 max-lg:mx-auto">
          <div className="pb-7">
            <h3 className="text-white uppercase font-bold">
              <Link href="/movies/1">{movie?.title}</Link>
            </h3>
            <div className="text-sm flex items-center font-nunito">
              <IoStar className="text-[#f5b50a]" size={20} />
              <p className="inline ml-1 mt-1">
                {" "}
                <span className="text-lg text-white">{movie?.rating}</span>/10
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="movie-card-content p-4 max-lg:mx-auto">
          <div className="pb-7 border-b border-foreground">
            <h3 className="text-white uppercase font-bold">
              <Link href="/movies/1">{movie.title}</Link>
              <span className="text-foreground px-1">(2012)</span>
            </h3>
            <div className="text-sm flex items-center font-nunito">
              <IoStar className="text-[#f5b50a]" size={20} />
              <p className="inline ml-1 mt-1">
                {" "}
                <span className="text-lg text-white">{movie?.rating}</span>/10
              </p>
            </div>
            <p className="leading-6 font-nunito">
             {movie?.description}
            </p>
          </div>

          <div className="py-5 space-y-2 font-nunito">
            <div className="flex gap-4">
              <p>Run Time: 2h21’ </p>
              <p>MMPA: PG-13 </p>
              <p>Release: {movie?.release_date}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sky-blue">
                <span className="text-foreground">Director: </span>
                Joss Whedon
              </p>
              <p className="text-sky-blue">
                <span className="text-foreground">Stars: </span>
                Robert Downey Jr., Chris Evans, Chris Hemsworth
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
