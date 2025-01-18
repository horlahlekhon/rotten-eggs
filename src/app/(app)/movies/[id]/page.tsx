'use client';

import { MovieCard } from "@/components/films/movie";
import Hero from "@/components/layout/hero";
import Review from "@/components/review";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { movies } from "@/lib/data";
import { ChevronRight, Heart, PlayIcon, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoCardOutline, IoStar, IoStarOutline } from "react-icons/io5";
import { Movie as MovieType } from "@/types";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const MovieDetails = () => {
  const tabs = [
    { label: "Overview", value: "overview" },
    { label: "Reviews", value: "reviews" },
    { label: "Cast & Crew", value: "cast-crew" },
    { label: "Media", value: "media" },
    { label: "Related Movies", value: "related-movies" },
  ];

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Update height based on content
    }
  }, [contentRef.current?.scrollHeight]);

    // Handle scroll position change
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup scroll event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div
      ref={contentRef}
      className="relative max-lg:mb-0"
      style={{
        marginBottom: `calc(100vh + ${contentHeight}px)`, // Dynamically adjust margin
      }}
    >
      <Hero bgImg="/images/hero-bg-skyfall.jpg">
        <div className="max-lg:py-12 max-lg:px-20 py-20 uppercase text-white grid grid-cols-2">
          <div
            id="hero-image"
            className={`lg:fixed lg:top-[${
              scrolled ? "100px" : "250px"
            }] lg:mr-[50px] relative z-[400] max-lg:mx-auto w-full xs:w-[336px] h-[540px] md:w-[400px] md:h-[612px] lg:h-[500px] lg:w-[350px]`}
          >
            <Image
              src="/images/movies/movie-single-skyfall.jpg"
              className="absolute rounded-sm max-xs:px-2"
              alt="logo"
              fill
            />
            <div className="absolute bottom-[-150px] bg-background w-full text-sm border-[3px] border-light-blue p-5 space-y-4">
              <button className="bg-pink rounded-sm h-11 font-bold text-white w-full uppercase">
                <PlayIcon size={14} className="inline fill-white" /> Watch
                Trailer
              </button>
              <button className="bg-[#dcf836] rounded-sm h-11 font-bold text-black w-full uppercase">
                <IoCardOutline size={14} className="inline" /> Buy ticket
              </button>
            </div>
          </div>
        </div>
      </Hero>

      {/* movie content section  */}

      <section className="movie-single-content max-lg:mx-auto px-8 pt-40 md:px-32 lg:absolute lg:top-[100px] lg:mx-2 right-0 lg:w-[70%]">
        <h1 className="bd-hd text-4xl font-bold text-white font-dosis">
          Skyfall: Quantum of Spectre{" "}
          <span className="text-2xl font-light text-foreground">2015</span>
        </h1>

        <div className="cta flex max-md:flex-col items-start lg:items-center gap-5 md:gap-8 mt-5 text-sm">
          <button className="bg-transparent font-bold text-pink uppercase">
            <span className="border border-pink rounded-full p-3 inline-flex items-center w-auto mr-4">
              <Heart className="inline fill-pink" size={16} />
            </span>
            Add to Favorite
          </button>
          <button className="bg-transparent font-bold text-pink uppercase">
            <span className="border border-pink rounded-full p-3 inline-flex items-center w-auto mr-4">
              <Share2 className="inline fill-pink" size={16} />
            </span>
            Share
          </button>
        </div>

        <section className="flex max-md:flex-col items-center max-md:space-y-6 border-y border-foreground max-md:py-4 mx-8 lg:mx-0 my-16">
          <div className="text-sm flex items-center font-nunito md:border-r md:px-5">
            <IoStar className="text-[#f5b50a] w-7 h-7 md:w-9 md:h-9" />
            <p className="inline ml-1 mt-1">
              <span className="text-sm text-white">8.1</span>/10
              <span className="block text-sm text-sky-blue">56 Reviews</span>
            </p>
          </div>

          <div className="font-nunito md:ml-5">
            <span className="text-base md:text-lg">Rate This Movie: </span>
            {Array.from({ length: 6 }).map((_, index) => (
              <IoStar
                key={index}
                className="text-[#f5b50a] inline  w-7 h-7 md:w-9 md:h-9"
              />
            ))}
            <IoStarOutline className="inline w-7 h-7 md:w-9 md:h-9" />
          </div>
        </section>

        {/* movie overview tabs  */}
        <section>
          <Tabs defaultValue="overview" className="mx-8 max-md:my-52 lg:mx-0">
            <TabsList className="lg:overflow-x-auto hide-scrollbar text-foreground bg-transparent w-full flex md:justify-start max-md:flex-col items-start md:items-center md:gap-10 max-md:space-y-4 max-md:mb-40">
              {tabs.map(({ label, value }, index) => (
                <TabsTrigger
                  key={`${index}-${value}`}
                  value={value}
                  className="pl-0 data-[state=active]:text-lemon-green data-[state=active]:border-b-[3px] border-lemon-green rounded-none hover:text-lemon-green hover:border-b-[3px] uppercase text-lg font-bold"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview" className="mb-[1000px]">
              <div className="my-10 font-nunito">
                <p>
                  Tony Stark creates the Ultron Program to protect the world,
                  but when the peacekeeping program becomes hostile, The
                  Avengers go into action to try and defeat a virtually
                  impossible enemy together. Earth's mightiest heroes must come
                  together once again to protect the world from global
                  extinction.
                </p>
                <div>
                  <section>
                    <div className="my-6 flex justify-between items-center border-b border-foreground pb-2">
                      <h4 className="text-white font-bold font-dosis uppercase">
                        Videos & Photos
                      </h4>
                      <Link
                        href="/movie"
                        className="flex items-center text-[12px] text-sky-blue"
                      >
                        All 5 Videos & 245 Photos <ChevronRight size={14} />
                      </Link>
                    </div>

                    <div className="flex md:justify-between flex-wrap gap-4 relative">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <button className="relative w-[100px] h-[100px]">
                              <Image
                                className="rounded-sm transition-all duration-500 ease-out hover:opacity-70"
                                src="/images/movies/movie-photo-1.jpg"
                                alt="photo"
                                layout="fill"
                                objectFit="fit"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="w-full md:w-[700px] md:h-[500px] bg-white">
                            <DialogHeader className="hidden">
                              <DialogTitle>Edit profile</DialogTitle>
                            </DialogHeader>
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/movies/movie-photo-1.jpg"
                                alt="photo"
                                layout="fill"
                                objectFit="fit"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </section>
                  <section>
                    <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                      <h4 className="text-white font-bold font-dosis uppercase">
                        cast
                      </h4>
                      <Link
                        href="/movie"
                        className="flex items-center text-[12px] text-sky-blue"
                      >
                        Full Cast & Crew <ChevronRight size={14} />
                      </Link>
                    </div>

                    <div>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div
                          key={index}
                          className="cast-it flex items-center font-nunito mb-7"
                        >
                          <div className="cast-left relative flex items-center gap-2 w-[60%]">
                            <Image
                              src="/images/celebrities/ava1.jpg"
                              className="rounded-sm"
                              alt="ava1"
                              width={40}
                              height={40}
                            />
                            <Link href="/celeb" className="text-sky-blue">
                              Robert Downey Jr.
                            </Link>
                          </div>
                          <p>... Robert Downey Jr.</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                      <h4 className="text-white font-bold font-dosis uppercase">
                        User reviews
                      </h4>
                      <Link
                        href="/movie"
                        className="flex items-center text-[12px] text-sky-blue"
                      >
                        See All 56 Reviews <ChevronRight size={14} />
                      </Link>
                    </div>

                    <Review />
                  </section>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="my-10">
                <button className="bg-pink rounded-full h-11 w-36 font-bold text-white hover:text-black uppercase">
                  Write Review
                </button>

                {/* filter */}
                <div className="my-10 text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
                  <p>
                    Found <span className="text-sky-blue">56 reviews</span> in
                    total
                  </p>

                  <div className="flex max-md:flex-col">
                    <label className="self-center mx-2">Filter by:</label>
                    <select className="p-2 bg-[#020d18] max-md:border md:border-l border-[#405266] text-white outline-none">
                      <option value="popularity">Popularity Descending</option>
                      <option value="popularity">Popularity Ascending</option>
                      <option value="ating">Rating Descending</option>
                      <option value="rating">Rating Ascending</option>
                      <option value="date">Release date Descending</option>
                      <option value="date">Release date Ascending</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-10">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="first:border-none border-t border-[#405266] pt-5"
                    >
                      <Review />
                    </div>
                  ))}
                </div>

                <div className="my-10 text-sm font-nunito topbar-filter flex max-md:flex-col max-md:py-4 max-md:mx-auto justify-between items-center gap-2 border-y border-[#405266]">
                  <p>Reviews per page:</p>

                  <select className="p-2 bg-[#020d18] max-md:border md:border-x border-[#405266] text-white outline-none">
                    <option value="5">5 Reviews</option>
                    <option value="10">10 Reviews</option>
                  </select>

                  {/* custom pagination  */}
                  <div className="flex gap-3">
                    <p>Page 1 of 6:</p>

                    <div className="flex gap-3 text-sky-blue">
                      <button className="text-lemon-green">1</button>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>
                        <FaCaretRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cast-crew">
              <div className="my-10">
                <h4 className="font-bold text-lg">
                  Cast & Crew of
                  <span className="block text-sky-blue text-2xl">
                    Skyfall: Quantum of Spectre
                  </span>
                </h4>
                <section>
                  <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Directors & Credit Writers
                    </h4>
                  </div>

                  <div>
                    {Array.from({ length: 1 }).map((_, index) => (
                      <div
                        key={index}
                        className="cast-it flex items-center font-nunito mb-7"
                      >
                        <div className="cast-left relative flex items-center gap-2 w-[60%]">
                          <Image
                            src="/images/celebrities/ava1.jpg"
                            className="rounded-sm"
                            alt="ava1"
                            width={40}
                            height={40}
                          />
                          <Link href="/celeb" className="text-sky-blue">
                            Robert Downey Jr.
                          </Link>
                        </div>
                        <p>... Robert Downey Jr.</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Directors & Credit Writers
                    </h4>
                  </div>

                  <div>
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="cast-it flex items-center font-nunito mb-7"
                      >
                        <div className="cast-left relative flex items-center gap-2 w-[60%]">
                          <Image
                            src="/images/celebrities/ava1.jpg"
                            className="rounded-sm"
                            alt="ava1"
                            width={40}
                            height={40}
                          />
                          <Link href="/celeb" className="text-sky-blue">
                            Robert Downey Jr.
                          </Link>
                        </div>
                        <p>... Robert Downey Jr.</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Cast
                    </h4>
                  </div>

                  <div>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div
                        key={index}
                        className="cast-it flex items-center font-nunito mb-7"
                      >
                        <div className="cast-left relative flex items-center gap-2 w-[60%]">
                          <Image
                            src="/images/celebrities/ava1.jpg"
                            className="rounded-sm"
                            alt="ava1"
                            width={40}
                            height={40}
                          />
                          <Link href="/celeb" className="text-sky-blue">
                            Robert Downey Jr.
                          </Link>
                        </div>
                        <p>... Robert Downey Jr.</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Produced by
                    </h4>
                  </div>

                  <div>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="cast-it flex items-center font-nunito mb-7"
                      >
                        <div className="cast-left relative flex items-center gap-2 w-[60%]">
                          <Image
                            src="/images/celebrities/ava1.jpg"
                            className="rounded-sm"
                            alt="ava1"
                            width={40}
                            height={40}
                          />
                          <Link href="/celeb" className="text-sky-blue">
                            Robert Downey Jr.
                          </Link>
                        </div>
                        <p>... Robert Downey Jr.</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="media">
              <div className="my-10">
                <h4 className="font-bold text-lg">
                  Videos & Photos of
                  <span className="block text-sky-blue text-2xl">
                    Skyfall: Quantum of Spectre
                  </span>
                </h4>
                <section>
                  <div className="my-12 mb-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Videos <span className="text-foreground">(8)</span>
                    </h4>
                  </div>

                  <div className="max-md:space-y-8 centralize max-md:flex-col md:gap-5 flex-wrap">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index}>
                        <div className="relative w-[170px]">
                          <Image
                            src="/images/movies/vd-item2.jpg"
                            className="mb-5 rounded-sm transition-all duration-500 ease-out cursor-pointer hover:opacity-70"
                            alt="photo"
                            width={170}
                            height={96}
                          />
                          <div className="centralize absolute bottom-2 right-8 bg-pink rounded-full w-9 h-9 font-bold text-white uppercase transition-all duration-500 ease-out cursor-pointer hover:scale-110 hover:opacity-60">
                            <PlayIcon size={16} className="inline fill-white" />
                          </div>
                        </div>
                        <Link href="/" className="text-white font-bold">
                          Trailer: Watch New Scenes
                          <span className="block text-xs text-foreground font-light">
                            1:31
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="my-6 flex justify-between items-center border-b border-foreground pb-2">
                    <h4 className="text-white font-bold font-dosis uppercase">
                      Photos <span className="text-foreground">(21)</span>
                    </h4>
                  </div>

                  <div className="flex max-md:justify-between flex-wrap gap-4 relative">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <button key={index} className="relative">
                        <Image
                          className="rounded-sm transition-all duration-500 ease-out hover:opacity-70"
                          src="/images/movies/movie-photo-1.jpg"
                          alt="photo"
                          width={100}
                          height={100}
                        />
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="related-movies">
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

                  <div className="grid grid-cols-1">
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
            </TabsContent>

            {/* <TabsContent value="overview"></TabsContent>
          <TabsContent value="overview"></TabsContent> */}
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default MovieDetails;
