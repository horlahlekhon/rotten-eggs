"use client";

import { MovieCard } from "@/components/films/movie";
import Hero from "@/components/layout/hero";
import { movies } from "@/lib/data";
import { Movie as MovieType } from "@/types";
import { ChevronRight, List } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export const Movies = () => {
  const [isGridView, setIsGridView] = useState<boolean>(false);

  return (
    <div>
      <Hero>
        <div className="breadcrumb max-lg:py-12 py-20 uppercase text-white space-y-4 flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl">movie listing</h2>

          <div className="flex items-center justify-center gap-2 text-foreground font-nunito">
            <Link href="/" className="text-sky-blue">
              home
            </Link>
            <ChevronRight size={15} />
            <p>movie listing</p>
          </div>
        </div>
      </Hero>

      <div className="container lg:grid grid-cols-[1fr_0.4fr] gap-10 p-20 max-xs:p-0 sm:px-10 lg:px-20  max-xs:my-5">
        <div className="text-sm">
          <div className="font-nunito topbar-filter flex max-lg:flex-col max-lg:space-y-5 max-lg:py-4 max-lg:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
            <p>
              Found <span className="text-sky-blue">1,608 movies</span> in
              total
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

          <div
            className={`grid mt-10 ${isGridView ? "grid-cols-3 xl:grid-cols-4 max-lg:grid-cols-1" : "grid-cols-1"}`}
          >
            {movies.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie} isGridView={isGridView} />
            ))}
            {/* // <Movie isGridView={isGridView} />
            // <Movie isGridView={isGridView} />
            // <Movie isGridView={isGridView} />
            // <Movie isGridView={isGridView} /> */}
          </div>
        </div>

        <div className="relative font-nunito">
          <h3 className="uppercase font-bold text-lg pb-2 border-b border-foreground text-white">
            Search for movie
          </h3>

          <form
          id="search-form"
            className="form-style-1 p-4 max-xs:mx-5 bg-[#0b1a2a] my-10 border-[3px] border-light-blue"
            action="#"
          >
            <div className="row">
              <div className="col-md-12 form-it">
                <label>Movie name</label>
                <input type="text" placeholder="Enter keywords" />
              </div>
              <div className="col-md-12 form-it">
                <label>Genres &amp; Subgenres</label>
                <div className="group-ip">
                  <div className="ui fluid dropdown selection multiple">
                    <select name="skills">
                      <option value="">Enter to filter genres</option>
                      <option value="Action1">Action 1</option>
                      <option value="Action2">Action 2</option>
                      <option value="Action3">Action 3</option>
                      <option value="Action4">Action 4</option>
                      <option value="Action5">Action 5</option>
                    </select>
                    {/* <i className="dropdown icon"></i> */}
                    {/* <div className="default text">Enter to filter genres</div> */}
                    <div className="menu transition hidden">
                      <div className="item" data-value="Action1">
                        Action 1
                      </div>
                      <div className="item" data-value="Action2">
                        Action 2
                      </div>
                      <div className="item" data-value="Action3">
                        Action 3
                      </div>
                      <div className="item" data-value="Action4">
                        Action 4
                      </div>
                      <div className="item selected" data-value="Action5">
                        Action 5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 form-it">
                <label>Rating Range</label>

                <select>
                  <option value="range">
                    -- Select the rating range below --
                  </option>
                  <option value="saab">
                    -- Select the rating range below --
                  </option>
                  <option value="saab">
                    -- Select the rating range below --
                  </option>
                  <option value="saab">
                    -- Select the rating range below --
                  </option>
                </select>
              </div>
              <div className="col-md-12 form-it">
                <label>Release Year</label>
                <div className="flex justify-between gap-10">
                  <select className="w-full">
                    <option value="range">From</option>
                    <option value="number">10</option>
                    <option value="number">20</option>
                    <option value="number">30</option>
                  </select>

                  <select className="w-full">
                    <option value="range">To</option>
                    <option value="number">20</option>
                    <option value="number">30</option>
                    <option value="number">40</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 uppercase">
                <button className="font-dosis submit uppercase text-sm bg-pink rounded-sm font-bold text-white w-full p-3" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Movies;
