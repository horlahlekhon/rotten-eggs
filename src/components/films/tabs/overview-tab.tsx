import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Review from '@/components/review';


const OverviewTab = () => {
  return (
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
                <button className="relative w-[110px] h-[100px]">
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
  )
}

export default OverviewTab