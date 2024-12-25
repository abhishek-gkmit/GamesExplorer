import { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import dayjs from 'dayjs';
import Video from 'react-native-video';

import TextBlock from '@components/customText';
import Loader from '@components/customLoader';
import IconButton from '@components/iconButton';
import ButtonWithIcon from '@components/buttonWithIcon';
import Chip from '@components/chip';
import useStyles from '@hooks/useStyles';
import useGameDetailsQuery from '@network/hooks/useGameDetailsQuery';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { getPlatformIconName, removeHtmlTags } from '@utility/helpers';
import { ageRating } from '@constants';

import gameDetailsStyles from './styles';

function Rating({ rating }: RatingProps) {
  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameDetailsStyles);

  return (
    <View style={styles.ratingContainer}>
      <MaterialIcons
        name="star-rate"
        color={colors.ratingStarColor}
        size={14}
      />

      <TextBlock style={styles.rating}>{rating.toPrecision(2)}</TextBlock>
    </View>
  );
}

function DetailCard({ firstLine, secondLine }: DetailCardProps) {
  const styles = useStyles(gameDetailsStyles);

  return (
    <View style={styles.detailContainer}>
      <TextBlock style={styles.detailFirstLine}>{firstLine}</TextBlock>
      <TextBlock style={styles.detailSecondLine}>{secondLine}</TextBlock>
    </View>
  );
}

function CustomVideo({ trailerUrl, backgroundUrl }: CustomVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameDetailsStyles);

  if (!trailerUrl) {
    return null;
  }

  return (
    <FastImage source={{ uri: backgroundUrl }} style={styles.customVideo}>
      {showVideo ? (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: trailerUrl }}
            style={styles.trailer}
            onEnd={() => setShowVideo(false)}
            controlsStyles={{ hidePrevious: true, hideNext: true }}
            controls
          />
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowVideo(true)}
          style={styles.playBtn}>
          <MaterialIcons name="play-arrow" size={30} color={colors.white} />
        </TouchableOpacity>
      )}
    </FastImage>
  );
}

function GameDescription({ description }: { description: string }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleShowLess = () => setShowFullDesc(showFullDesc => !showFullDesc);

  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameDetailsStyles);

  return (
    <TouchableOpacity
      style={styles.description}
      activeOpacity={0.9}
      onPress={toggleShowLess}>
      <View style={styles.descriptionHeadingContainer}>
        <TextBlock style={styles.descriptionHeading}>About this game</TextBlock>
        <MaterialIcons
          name={showFullDesc ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
          size={20}
          color={colors.foreground}
        />
      </View>

      <TextBlock numberOfLines={showFullDesc ? 1000 : 2} ellipsizeMode="tail">
        {description}
      </TextBlock>
    </TouchableOpacity>
  );
}

function GamePlatforms({ platforms }: GamePlatformsProps) {
  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameDetailsStyles);

  return (
    <View style={styles.gamePlatforms}>
      {platforms.map(platform => {
        const platformIconName = getPlatformIconName(platform);
        return (
          <MaterialCommunityIcons
            key={platform}
            name={platformIconName}
            color={colors.foreground}
            size={36}
          />
        );
      })}
    </View>
  );
}

function GameDetailsHeader({ data }: { data?: GameDetails }) {
  const styles = useStyles(gameDetailsStyles);

  return (
    <View style={styles.container}>
      <FastImage source={{ uri: data?.gameLogo }} style={styles.gameLogo} />

      <View style={styles.nameAndDevContainer}>
        <TextBlock style={styles.name}>{data?.name}</TextBlock>

        <TextBlock style={styles.developer}>{data?.publisher}</TextBlock>

        <TextBlock style={styles.developer}>{data?.genres[0]}</TextBlock>
      </View>
    </View>
  );
}

function GameMetrics({ data }: { data?: GameDetails }) {
  const styles = useStyles(gameDetailsStyles);

  return (
    <View style={styles.detailCardContainer}>
      <Rating rating={data!.rating} />

      <View style={styles.detailContainerSeparator} />

      <View style={styles.detailContainer}>
        <TextBlock style={styles.ageRating}>
          {ageRating[data!.ageRating]?.age + '+'}
        </TextBlock>

        <TextBlock style={styles.ageRatingDesc}>
          Rated for {ageRating[data!.ageRating]?.age + '+'}
        </TextBlock>
      </View>

      <View style={styles.detailContainerSeparator} />

      <DetailCard firstLine={data!.playtime + 'hr'} secondLine="Playtime" />

      <View style={styles.detailContainerSeparator} />

      <DetailCard
        firstLine={dayjs(data!.released).format('MMM DD, YYYY')}
        secondLine="Released at"
      />
    </View>
  );
}

function VideoAndImageCarousel({ data }: { data?: GameDetails }) {
  const styles = useStyles(gameDetailsStyles);

  return (
    <ScrollView
      horizontal
      style={styles.insights}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.insightsContent}>
      <CustomVideo
        trailerUrl={data?.trailer}
        backgroundUrl={data!.gameLogo}
      />

      {data?.screenshots.map((insightImageUrl, i) => (
        <FastImage
          key={insightImageUrl + i}
          style={styles.insightImage}
          source={{ uri: insightImageUrl }}
        />
      ))}
    </ScrollView>
  );
}

function GameTags({ data }: { data?: GameDetails }) {
  const styles = useStyles(gameDetailsStyles);
  return (
    <>
      <TextBlock style={styles.sectionHeading}>{'Game #tags'}</TextBlock>
      <View style={styles.tagsContainer}>
        {data?.tags.map(({ id, name }) => (
          <Chip key={id} text={name} />
        ))}
      </View>
    </>
  );
}

function Separator() {
  const styles = useStyles(gameDetailsStyles);

  return <View style={styles.sectionSeparator} />;
}

function GameDetails() {
  const navigation = useNavigation<MainStackNavigationProp>();
  const route = useRoute<MainStackRouteProp>();

  const { data, loading } = useGameDetailsQuery(route.params!.gameId);

  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(gameDetailsStyles);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      style={styles.gameDetails}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll>
      <IconButton
        icon={{ name: 'arrow-left', size: 20, color: colors.foreground }}
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      />

      <GameDetailsHeader data={data} />

      <GameMetrics data={data} />

      <ButtonWithIcon
        style={styles.addToCollectionsBtn}
        textStyle={styles.addToCollectionsBtnText}
        text="Add to collection"
      />

      <VideoAndImageCarousel data={data} />

      <GameDescription description={removeHtmlTags(data!.description)} />

      <Separator />

      <GameTags />

      <Separator />

      <TextBlock style={styles.sectionHeading}>{'Game platforms'}</TextBlock>
      <GamePlatforms platforms={data!.platforms} />
    </ScrollView>
  );
}

export default GameDetails;
