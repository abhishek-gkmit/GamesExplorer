import { useMemo, useState } from 'react';
import { FlatList, ImageBackground, TextInput, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ToggleFilterList from '@components/toggleFilterList';
import GameCard from '@components/gameCard';
import Loader from '@components/customLoader';
import EmptyListIndicator from '@components/emptyListIndicator';
import useStyles from '@hooks/useStyles';
import useGamesListQuery from '@network/hooks/useGamesListQuery';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { loginBackground } from '@constants/images';
import { categoryFilters, platformFilters } from '@constants';

import searchScreenStyles from './styles';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>(['Action']);
  const [platforms, setPlatforms] = useState<string[]>(['PC']);

  const { gamesList, isLoading, getNextPage } = useGamesListQuery(
    categories,
    searchQuery,
    platforms,
  );

  const borderRadius = useSharedValue(20);

  const { colors } = useAppSelector(selectTheme);

  const styles = useStyles(searchScreenStyles);

  const handleFocus = () => {
    borderRadius.value = withTiming(0);
  };

  const handleBlur = () => {
    borderRadius.value = withTiming(20);
  };

  const listFooter = useMemo(() => {
    if (!gamesList || !gamesList.hasNextPage) {
      return null;
    }

    return <Loader style={styles.listLoader} />;
  }, [gamesList]);

  return (
    <View style={styles.searchScreen}>
      <ImageBackground
        style={styles.searchHeader}
        source={loginBackground}
        blurRadius={60}>
        <Animated.View
          style={[
            styles.inputContainer,
            {
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
          ]}>
          <MaterialIcons name="search" size={18} color={colors.foreground} />
          <TextInput
            placeholder="Search games"
            placeholderTextColor={colors.searchScreenInputText}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={styles.searchInput}
            cursorColor={colors.secondary}
          />
        </Animated.View>

        <ToggleFilterList
          filters={categoryFilters}
          title="Select genre"
          activeFilters={categories}
          scrollViewContent={styles.toggleFilterListContent}
          textStyle={styles.toggleFilterListHeading}
          style={styles.toggleFilterList}
          onFiltersChange={activeCategories => setCategories(activeCategories)}
        />

        <ToggleFilterList
          filters={platformFilters}
          title="Select platform"
          activeFilters={platforms}
          scrollViewContent={styles.toggleFilterListContent}
          textStyle={styles.toggleFilterListHeading}
          style={styles.toggleFilterList}
          onFiltersChange={activeCategories => setPlatforms(activeCategories)}
        />
      </ImageBackground>

      {isLoading ? (
        <Loader style={styles.loader} />
      ) : (
        <FlatList
          data={gamesList?.formattedGamesList}
          keyExtractor={item => item.id + ''}
          renderItem={({ item }) => <GameCard gameDetails={item} />}
          contentContainerStyle={styles.gameListContent}
          onEndReached={getNextPage}
          ListFooterComponent={listFooter}
          ListEmptyComponent={() => (
            <EmptyListIndicator title="No games found" />
          )}
          style={styles.gameList}
        />
      )}
    </View>
  );
}

export default Search;
