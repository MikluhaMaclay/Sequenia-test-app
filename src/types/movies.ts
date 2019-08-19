export type IMovie = {
  id: number;
  localizedName: string;
  name?: string;
  year?: string | number;
  rating?: string | number;
  genres?: string[];
  imageUrl?: string ;
  description?: string;
}

export type IMovieArray = {
  [index: number]: IMovie
}

export interface IRes {
  films: IMovieArray
}