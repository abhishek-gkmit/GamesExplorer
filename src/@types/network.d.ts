interface GameRequirements {
  minimum: string;
  recommended: string;
}

interface GamePlatform {
  id: 4;
  name: 'PC';
  releasedAt: string;
  requirements: GameRequirements;
}

interface Genere {
  id: 4;
  name: 'Action';
  gamesCount: 184421;
}

interface GameTag {
  id: 31;
  name: 'Singleplayer';
  gamesCount: 233006;
}

interface AgeRating {
  id: number;
  name: string;
}

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  originalName: string;
  description: string;
  metaCritic: number | null;
  released: string | null;
  toBeAnnounced: boolean;
  updated: string | null;
  backgroundImage: string;
  backgroundImageAdditional: string;
  website: string;
  rating: number;
  ratingTop: number;
  ratings: Ratings;
  playtime: number;
  moviesCount: number;
  creatorsCount: number;
  achievementsCount: number;
  parentAchievementsCount: number;
  redditUrl: string;
  saturatedColor: string;
  dominantColor: string;
  systemPlatforms: GamePlatform[];
  genres: Genere[];
  tags: GameTag[];
  ageRating: AgeRating[];
  rawDescription: string;
}

interface GameDetailsShort {
  id: number;
  name: string;
  gameLogo: string;
  backgroundImage: string;
  platforms: string[];
  generes: string[];
  rating: number;
  ageRating: string;
}

interface GameListFilters {
  discover?: boolean;
  page?: number;
  page_size?: number;
  search?: string;
  search_precise?: boolean;
  search_exact?: boolean;
  platforms?: string;
  genres?: string;
  tags?: string;
  metacritic?: string;
  ordering?: string;
}
