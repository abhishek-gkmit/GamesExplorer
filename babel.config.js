module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@utility': './src/utility',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@network': './src/network',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@config': './src/config',
          '@contexts': './src/contexts',
          '@store': './src/store',
        },
      },
    ],
    ['module:react-native-dotenv'],
    'react-native-reanimated/plugin',
  ],
};
