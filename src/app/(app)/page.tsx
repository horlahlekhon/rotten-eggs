import { Spotlight } from "@/components/celebrities/spotlight";
import Hero from "@/components/layout/hero";
import { MovieTab } from "@/components/ui/movie-tab";
import YtPlayer from "@/components/yt-player";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="px-8 lg:px-20">
        <div className="lg:grid grid-cols-[650px_300px] xl:grid-cols-[800px_300px] 2xl:grid-cols-2 gap-10">
          <div>
            <MovieTab title="in theater" link="/theater/movies"/>
            <MovieTab title="on tv" link="/tv/movies"/>
          </div>

          <Spotlight />
        </div>
      </div>

      <div className="p-16 bg-[#06121e] mb-44">
        <YtPlayer />
      </div>
    </>
  );
}
