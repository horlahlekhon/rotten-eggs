import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { MovieCard } from '../movie'
import { Movie as MovieType } from "@/types";
import { movies } from '@/lib/data';

const RelatedMoviesTab = () => {
  return (
    <div className="my-10">
    <h4 className="font-bold text-lg">
      Related Movies To
      <span className="block text-sky-blue text-2xl">
        Skyfall: Quantum of Spectre
      </span>
    </h4>

    <section>
      {/* filter */}
      <div className="my-10 text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
        <p>
          Found <span className="text-sky-blue">12 movies</span> in
          total
        </p>

        <div className="flex max-md:flex-col">
          <label className="self-center mx-2">Sort by:</label>
          <select className="p-2 bg-[#020d18] max-md:border md:border-l border-[#405266] text-white outline-none">
            <option value="popularity">
              Popularity Descending
            </option>
            <option value="popularity">Popularity Ascending</option>
            <option value="rating">Rating Descending</option>
            <option value="rating">Rating Ascending</option>
            <option value="date">Release date Descending</option>
            <option value="date">Release date Ascending</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:overflow-y-auto hide-scrollbar lg:h-[350vh]">
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
    </section>
  </div>
  )
}

export default RelatedMoviesTab