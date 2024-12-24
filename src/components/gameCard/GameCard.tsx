import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';

import gameCardStyles from './styles';
import { ellipsize } from '@utility/helpers';

function Rating({ rating }: RatingProps) {
  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameCardStyles);

  return (
    <View style={styles.ratingContainer}>
      <TextBlock style={styles.rating}>{rating.toPrecision(2)}</TextBlock>
      <MaterialIcons
        name="star-rate"
        color={colors.ratingStarColor}
        size={12}
      />
    </View>
  );
}

function getPlatformIconName(platform: string) {
  switch (platform.toLowerCase()) {
    case 'pc':
      return 'microsoft-windows';
    case 'xbox':
      return 'microsoft-xbox';
    case 'playstation':
      return 'sony-playstation';
    case 'ios':
      return 'apple-ios';
    case 'android':
      return 'android';
    case 'mac':
      return 'apple';
    case 'linux':
      return 'linux';
    case 'nintendo':
      return 'nintendo-switch';
    default:
      return 'web';
  }
}

function GamePlatforms({ platforms }: GamePlatformsProps) {
  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameCardStyles);

  return (
    <View style={styles.gamePlatforms}>
      {platforms.map(platform => {
        const platformIconName = getPlatformIconName(platform);
        return (
          <MaterialCommunityIcons
            key={platform}
            name={platformIconName}
            color={colors.white}
            size={14}
          />
        );
      })}
    </View>
  );
}

function GameCard({ gameDetails }: GameCardProps) {
  const { colors, gradients } = useAppSelector(selectTheme);

  const styles = useStyles(gameCardStyles);

  return (
    <TouchableOpacity style={styles.gameCard} activeOpacity={0.95}>
      <FastImage
        style={styles.gameCardBackground}
        source={{ uri: gameDetails.backgroundImage }}>
        <LinearGradient
          colors={gradients.gameCard}
          locations={[0.3, 1]}
          style={styles.gradient}>
          <View style={styles.gameDetailsContainer}>
            <FastImage
              source={{ uri: gameDetails.gameLogo }}
              style={styles.gameLogo}
            />

            <View style={styles.gameDetails}>
              <TextBlock style={styles.name}>
                {ellipsize(gameDetails.name, 32)}
              </TextBlock>

              <TextBlock style={styles.genere}>
                {gameDetails.genres[0]}
              </TextBlock>

              <Rating rating={gameDetails.rating} />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.addToCollectionsBtn}>
            <MaterialCommunityIcons
              name="plus"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>

          <GamePlatforms platforms={gameDetails.platforms} />
        </LinearGradient>
      </FastImage>
    </TouchableOpacity>
  );
}

export default GameCard;
