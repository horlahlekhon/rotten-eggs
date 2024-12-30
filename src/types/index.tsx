export type Movie = {
  id: number;
  title: string;
  image: string;
  genre: string[];
  rating: number;
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