'use client';


import Hero from "@/components/layout/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, PlayIcon, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoCardOutline, IoStar, IoStarOutline } from "react-icons/io5";

import OverviewTab from "@/components/films/tabs/overview-tab";
import ReviewTab from "@/components/films/tabs/review-tab";
import CastCrewTab from "@/components/films/tabs/cast-crew";
import MediaTab from "@/components/films/tabs/media";
import RelatedMoviesTab from "@/components/films/tabs/related-movies";

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
        <div className="max-md:px-0 max-lg:py-12 max-lg:px-20 py-20 uppercase text-white">
          <div
            id="hero-image"
            className={`lg:fixed lg:top-[${
              scrolled ? "100px" : "250px"
            }] lg:mr-[50px] relative z-[400] max-lg:mx-auto w-full xs:w-[336px] h-[540px] md:w-[400px] md:h-[612px] lg:h-[310px] lg:w-[330px]`}
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

            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            <TabsContent value="reviews">
              <ReviewTab />
            </TabsContent>
            <TabsContent value="cast-crew">
              <CastCrewTab />
            </TabsContent>
            <TabsContent value="media">
              <MediaTab />
            </TabsContent>
            <TabsContent value="related-movies">
              <RelatedMoviesTab />
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
