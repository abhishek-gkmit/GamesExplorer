function formatGamePlatform(platforms: any[]) {
  return platforms.map(platform => platform?.platform?.slug);
}

function formatGenres(genres: any[]) {
  return genres.map(genre => genre.name);
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

export { formatGameDetailsList };
