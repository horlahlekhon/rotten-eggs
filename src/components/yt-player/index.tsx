"use client";

import { useState } from "react";
import YouTubePlayer from "react-youtube";
import VideoList from "./video-list";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Video } from "@/types/yt-player";

const YtPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState("1Q8fG0TtVAY"); // Default video

  const videos:Video[] = [
    {
      id: "1Q8fG0TtVAY",
      title: "Wonder Woman",
      thumbnail:
        "https://i.ytimg.com/vi/5JWcU96QkjU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAr5qZ5HDSmb6S2-YEBJ_fVZc0pA",
      duration: "2:31",
    },
    {
      id: "A27xPYvqERw",
      title: "Oblivion: Official Teaser Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/j7ldL1366UQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_LldqOHJ4qzZE2qQ4V-75pi3Q9g",
      duration: "2:36",
    },
    {
      id: "44LdLqgOpjo",
      title: "Skull Island Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/RAnc0uWLKyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANB2OsRIIaLE9oYEChTE8I2n838Q",
      duration: "2:44",
    },
    {
      id: "Div0iP65aZo",
      title: "Logan: Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/FnClXsQqp2U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3TEOwuHpu6B1t5ahii1eKScE6dQ",
      duration: "1:48",
    },
  ];

  return (
    <div>
      <div className="mb-6 flex justify-between items-center uppercase font-bold">
        <h2 className="text-white text-2xl">in theater</h2>
        <Link href="#" className="flex items-center">
          View all <ChevronRight size={14} />
        </Link>
      </div>
      <div className="flex my-10 max-xs:w-[250px] max-sm:w-max max-lg:flex-col h-auto text-gray-200 mx-auto">
        <div className="flex justify-center w-full h-full">
          <YouTubePlayer className="w-full h-full" videoId={selectedVideo} />
        </div>
        <div className="w-full lg:w-2/4 bg-gray-800">
          <VideoList
            videos={videos}
            onVideoSelect={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default YtPlayer;
