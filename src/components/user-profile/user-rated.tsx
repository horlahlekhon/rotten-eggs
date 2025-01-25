import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const UserRated = () => {
  return (
    <div className="md:absolute md:top-32 right-0 xl:right-[100px] md:mx-10 md:w-[60%] lg:w-2/3 form-style-1 p-6 max-xs:mx-5 md:mb-52">
      <div className="container p-20 max-xs:p-0 sm:px-10 lg:pr-20 lg:py-5 max-xs:my-5">
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
            </div>
          </div>

          <div className="grid grid-cols-1 lg:overflow-y-auto hide-scrollbar md:h-[500px] lg:h-[100vh]">
            <div
              className={`grid grid-cols-1 max-xs:w-full max-md:w-[300px] max-lg:mx-auto gap-4 md:grid-cols-[100px_1fr]`}
            >
              <div className="movie-card mx-auto w-full max-lg:w-[100px] h-[153px] relative">
                <Image
                  src={"/images/movies/slider4.jpg"}
                  alt="movie"
                  className="rounded-md"
                  fill={true}
                />
              </div>

              <div className="movie-card-content p-4 max-lg:mx-auto">
                <div className="pb-7">
                  <h3 className="text-white uppercase font-bold">
                    <Link href="/movies/1">The Walk</Link>
                    <span className="text-foreground px-1">(2012)</span>
                  </h3>
                  <div className="rated text-xs my-2 bg-[#233a50] rounded-sm w-fit py-1 px-4">
                    your rate:
                  </div>
                  <div className="text-sm flex items-center font-nunito">
                    <IoStar className="text-[#f5b50a]" size={20} />
                    <p className="inline ml-1 mt-1">
                      <span className="text-lg text-white">4.5</span>/10
                    </p>
                  </div>
                  <div className="rated text-xs my-2 bg-[#233a50] rounded-sm w-fit py-1 px-4">
                  your reviews:
                  </div>
                  <p className="font-bold">Best Marvel movie in my opinion</p>
                  <p className="leading-7 font-nunito mt-2">
                   <span className="text-sky-blue">02 April 2017</span> 
                  <br /> “This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.”</p>
                  {/* <p className="leading-6 font-nunito">
             {movie?.description}
            </p> */}
                </div>
              </div>
            </div>
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

export default UserRated;
