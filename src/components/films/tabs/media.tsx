import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaTab = () => {
  return (
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
            <button key={index} className="relative w-[90px] h-[80px]">
              <Image
                className="rounded-sm transition-all duration-500 ease-out hover:opacity-70"
                src="/images/movies/movie-photo-1.jpg"
                alt="photo"
                layout="fill"
                objectFit="fit"
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaTab;
