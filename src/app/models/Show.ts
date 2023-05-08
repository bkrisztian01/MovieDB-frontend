import { Genre } from './Genre';

export type Show = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genres: Genre[];
  episode_run_time: number[];
  first_air_date: string;
};
