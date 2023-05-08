export type Credit = {
  id: number;
  credit_id: string;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  character: string;
  profile_path: string;
  media_type: 'movie' | 'tv';
  episode_count: number | undefined;
};
