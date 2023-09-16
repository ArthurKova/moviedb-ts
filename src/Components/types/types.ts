export interface ICredits {
  id: number;
  profile_path: string;
  original_name: string;
  character: string;
}

export interface ICreditsFetch {
  cast: ICredits[];
}

export interface IHomeGallery {
  id: number;
  poster_path: string;
  title: string;
  name: string;
}

export interface IHomeGalleryFetch {
  results: IHomeGallery[];
}

interface IGenres {
  id: number;
  name: string;
}

export interface IMovieDetail {
  poster_path: string;
  title: string;
  release_date: string;
  tagline: string;
  overview: string;
  vote_average: number;
  genres: IGenres[];
}

export interface IMovieList {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: number;
}

export interface IMovieListFetch {
  results: IMovieList[];
}

export interface IReviews {
  id: number;
  author: string;
  created_at: string;
  content: string;
}

export interface IReviewsFetch {
  results: IReviews[];
}
