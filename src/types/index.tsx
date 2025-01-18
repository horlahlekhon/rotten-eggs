export type Movie = {
  id: number;
  title: string;
  release_date?: string;
  year?: number;
  image: string;
  genre?: string[];
  rating: number;
  description?: string;
};

export interface MovieSliderProps {
  movies?: Movie[];
  layout?: "top" | "bottom";
  autoplay?: boolean;
  width?: string;
  height?: string;
}


export type Celebrities = {
  name: string;
  image: string;
  role: string;
};

export interface SpotlightProps {
  celebrities?: Celebrities[];
}