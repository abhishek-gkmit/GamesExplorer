interface GameRequirements {
  minimum: string;
  recommended: string;
}

interface GamePlatform {
  id: 4;
  name: string;
  slug: string;
  releasedAt: string;
  requirements: GameRequirements;
}

interface Genere {
  id: 4;
  name: 'Action';
}

interface GameTag {
  id: 31;
  name: 'Singleplayer';
}

interface GameDetails {
  id: number;
  name: string;
  description: string;
  released: string;
  updated: string;
  gameLogo: string;
  website: string;
  rating: number;
  reviewsCount: number;
  playtime: number;
  screenshotCount: number;
  moviesCount: number;
  redditUrl: string;
  platforms: string[];
  genres: string[];
  tags: GameTag[];
  ageRating: string;
  trailer: string;
  publisher: string;
  screenshots: string[];
}

interface GameDetailsShort {
  id: number;
  name: string;
  gameLogo: string;
  backgroundImage: string;
  platforms: string[];
  genres: string[];
  rating: number;
  ageRating: string;
}

interface GameListFilters {
  discover?: boolean;
  page?: number;
  search?: string;
  searchPrecise?: boolean;
  searchExact?: boolean;
  platforms?: string;
  genres?: string;
  tags?: string;
  metacritic?: string;
  ordering?: string;
}
