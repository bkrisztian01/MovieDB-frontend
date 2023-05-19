import { Genre } from './Genre';

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  original_title: string;
  vote_average: number;
  overview: string;
  genres: Genre[];
  runtime: number;
  release_date: string;
};
