
export type Video = {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
}

export interface VideoListProps {
  videos: Video[];
  onVideoSelect: (id: string) => void;
  selectedVideo: string;
}