const colorSchemes = {
  dark: 'dark',
  light: 'light',
} as const;

const categoryFilters = [
  'Action',
  'Indie',
  'Adventure',
  'Strategy',
  'Shooter',
  'Casual',
  'Simulation',
  'Puzzle',
  'Arcade',
  'Platformer',
  'Massively Multiplayer',
  'Racing',
  'Sports',
  'Fighting',
  'Family',
  'Board Games',
  'Educational',
  'Card',
];

const platformFilters = [
  'PC',
  'PlayStation',
  'Xbox',
  'iOS',
  'Android',
  'Apple Macintosh',
  'Linux',
  'Nintendo',
  'Atari',
  'Commodore Amiga',
  'SEGA',
  '3DO',
  'Neo Geo',
  'Web',
];

const ageRating: { [key: string]: any } = {
  everyone: { age: 0, color: '#00FF00' },
  'everyone-10-plus': { age: 10, color: '#A0D65D' },
  teen: { age: 13, color: '#FFA500' },
  mature: { age: 17, color: '#FF4500' },
  'adults-only': { age: 18, color: '#FF0000' },
  'rating-pending': { age: null, color: '#808080' },
};

const iconFamilies = {
  material: 'MaterialIcons',
  materialCommunity: 'MaterialCommunityIcons',
} as const;

export {
  colorSchemes,
  categoryFilters,
  ageRating,
  platformFilters,
  iconFamilies,
};
