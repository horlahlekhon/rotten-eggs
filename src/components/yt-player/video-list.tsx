import { VideoListProps } from "@/types/yt-player";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

import { useState } from "react";

const VideoList: React.FC<VideoListProps> = ({
  videos,
  onVideoSelect,
  selectedVideo,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    videos.findIndex((video) => video.id === selectedVideo)
  );
  const [isInitialRender, setIsInitialRender] = useState(true); // Flag to track mounting

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false); // Mark as no longer the first render
      return;
    }

    const currentVideoElement = document.getElementById(
      `video-${selectedVideo}`
    );
    if (currentVideoElement) {
      currentVideoElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [currentIndex, selectedVideo]);

  const handlePrev = () => {
    const newIndex =
      currentIndex - 1 + videos.length < 0
        ? videos.length - 1
        : (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
    onVideoSelect(videos[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
    onVideoSelect(videos[newIndex].id);
  };

  return (
    <div className="space-y-2 h-[320px] text-white relative">
      <div className="flex justify-between relative bg-gray-800">
        <button onClick={() => handlePrev()} className="mx-auto hover:text-lemon-green">
          <ChevronUp size={32} />
        </button>
      </div>
      <div className="overflow-y-auto h-[280px] lg:h-[320px] py-10">
        {videos.map((video, index) => (
          <div
            key={video.id}
            id={`video-${video.id}`}
            className={`flex items-center p-3 cursor-pointer transition-all duration-300 ${
              selectedVideo === video.id
                ? "bg-[#1c3d5d] "
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              onVideoSelect(video.id);
            }}
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={96}
              height={56}
              className="rounded-md mr-3"
            />

            <div className="flex flex-col">
              <span className="font-bold text-white">{video.title}</span>
              <span className="opacity-75">{video.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between relative bottom-[40px] bg-gray-800">
        <button onClick={() => handleNext()} className="mx-auto hover:text-lemon-green">
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default VideoList;
