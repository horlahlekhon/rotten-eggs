"use client";

import React, { useState } from "react";
import { MovieCard } from "@/components/films/movie";
import { movies } from "@/lib/data";
import { Movie as MovieType } from "@/types";
import { List } from "lucide-react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";

const Favorites = () => {
  const [isGridView, setIsGridView] = useState<boolean>(false);
  return (
    <div className="md:absolute md:top-32 right-0 xl:right-[100px] md:mx-10 md:w-[60%] lg:w-2/3 form-style-1 p-6 max-xs:mx-5 md:mb-52">
      <div className="container p-20 max-xs:p-0 sm:px-10 lg:px-20 max-xs:my-5">
        <div className="text-sm">
        <div className="font-nunito topbar-filter flex max-lg:flex-col mb-5 max-lg:space-y-5 max-lg:py-4 max-lg:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
            <p>
              Found <span className="text-sky-blue">1,608 movies</span> in total
            </p>

            <div className="flex max-lg:flex-col">
              <label className="self-center mx-2">Sort by:</label>
              <select className="p-2 bg-[#020d18] max-lg:border lg:border-x border-[#405266] text-white outline-none">
                <option value="popularity">Popularity Descending</option>
                <option value="popularity">Popularity Ascending</option>
                <option value="rating">Rating Descending</option>
                <option value="rating">Rating Ascending</option>
                <option value="date">Release date Descending</option>
                <option value="date">Release date Ascending</option>
              </select>

              <div className="flex max-lg:flex-col items-center gap-4 max-lg:mt-5">
                <button
                  className={`lg:border-r border-[#405266] px-2 ${
                    !isGridView ? "text-lemon-green" : ""
                  }`}
                  onClick={() => setIsGridView(false)}
                >
                  <List
                    className={`border ${
                      !isGridView ? "border-lemon-green" : "border-[#405266]"
                    }`}
                    size={14}
                  />
                </button>
                <button
                  className={`${isGridView ? "text-lemon-green" : ""}`}
                  onClick={() => setIsGridView(true)}
                >
                  <BsFillGrid3X3GapFill size={14} />
                </button>
                <button></button>
              </div>
            </div>
          </div>
        
              <div className="grid grid-cols-1 lg:overflow-y-auto hide-scrollbar md:h-[500px] lg:h-[100vh]">
                {movies.map((movie: MovieType) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))} 
              </div>
        
              <div className="my-10 text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
                <p>Movies per page:</p>
        
                <select className="p-2 w-2/4 bg-[#020d18] max-md:border md:border-x border-[#405266] text-white outline-none">
                  <option value="5">5 Movies</option>
                  <option value="10">10 Movies</option>
                </select>
        
                {/* custom pagination  */}
                <div className="flex gap-3">
                  <p>Page 1 of 2:</p>
        
                  <div className="flex gap-3 text-sky-blue">
                    <button className="text-lemon-green">1</button>
                    <button>2</button>
                    <button>
                      <FaCaretRight />
                    </button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
