import { Spotlight } from "@/components/celebrities/spotlight";
import Hero from "@/components/layout/hero";
import MovieSlider from "@/components/ui/movie-slider";
import { MovieTab } from "@/components/ui/movie-tab";
import YtPlayer from "@/components/yt-player";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="social-link xs:px-8 text-white flex items-center justify-end relative top-0 left-0 mt-4 mr-4">
          <p className="mr-2 text-xs uppercase font-bold">Follow us: </p>
          <a href="#" className="mr-2">
            <FaFacebookF />
          </a>
          <a href="#" className="mr-2">
            <FaTwitter />
          </a>
          <a href="#" className="mr-2">
            <TiSocialGooglePlus />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
        <MovieSlider />
      </Hero>

      <div className="px-8 lg:px-20">
        <div className="lg:grid grid-cols-[650px_300px] xl:grid-cols-[800px_300px] 2xl:grid-cols-2 gap-10">
          <div>
            <MovieTab title="in theater" link="/movies" />
            <MovieTab title="on tv" link="/movies" />
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
