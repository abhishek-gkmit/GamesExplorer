function formatGamePlatform(platforms: any[]) {
  return platforms.map(platform => platform?.platform?.slug);
}

function formatGamePlatformDetailed(platforms: any[]) {
  return platforms.map(({ platform, released_at, requirements }) => ({
    id: platform.id,
    slug: platform.slug,
    name: platform.name,
    releasedAt: released_at,
    requirements,
  }));
}

function formatGenres(genres: any[]) {
  return genres.map(genre => genre.name);
}

function formatTags(tags: any[]): GameTag[] {
  return tags.map(tag => ({ id: tag?.id, name: tag?.name }));
}

function formatTrailers(trailsersData: any) {
  return trailsersData?.results?.[0]?.data?.max;
}

function formatScreenshots(screenshotsData: any) {
  const results = screenshotsData?.results as any[];

  return results.map(screenshot => screenshot?.image) as string[];
}

function formatGameDetailsList(data: any) {
  const results = data?.results;

  const formattedGames: GameDetailsShort[] = results?.map(
    ({
      id,
      name,
      background_image,
      parent_platforms,
      genres,
      rating,
      short_screenshots,
    }: any) => ({
      id,
      name,
      gameLogo: background_image,
      platforms: formatGamePlatform(parent_platforms),
      backgroundImage: short_screenshots[1]?.image,
      genres: formatGenres(genres),
      rating,
      ageRating: '',
    }),
  );

  return formattedGames;
}

function formatGameDetails(data: any, trailerData: any, screenshotsData: any) {
  const {
    id,
    name,
    description,
    released,
    updated,
    background_image,
    website,
    rating,
    reddit_url,
    reviews_count,
    playtime,
    screenshots_count,
    movies_count,
    platforms,
    parent_platforms,
    genres,
    tags,
    esrb_rating,
    publishers,
  } = data;

  const formattedGameDetails: GameDetails = {
    id,
    name,
    description,
    released,
    updated,
    gameLogo: background_image,
    website,
    rating,
    redditUrl: reddit_url,
    reviewsCount: reviews_count,
    playtime,
    screenshotCount: screenshots_count,
    moviesCount: movies_count,
    platforms: formatGamePlatform(parent_platforms),
    genres: formatGenres(genres),
    tags: formatTags(tags),
    ageRating: esrb_rating?.slug,
    trailer: formatTrailers(trailerData),
    publisher: publishers?.[0]?.name,
    screenshots: formatScreenshots(screenshotsData),
  };

  return formattedGameDetails;
}

export { formatGameDetailsList, formatGameDetails };
