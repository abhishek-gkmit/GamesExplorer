interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
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
