import { useState } from 'react';
import { ImageBackground, FlatList } from 'react-native';

import GameCard from '@components/gameCard';
import TextBlock from '@components/customText';
import Loader from '@components/customLoader';
import ToggleFilterList from '@components/toggleFilterList';
import useStyles from '@hooks/useStyles';
import { loginBackground } from '@constants/images';
import { categoryFilters } from '@constants';

import homeStyles from './styles';
import useGamesListQuery from '@network/hooks/useGamesListQuery';

function Home() {
  const [categories, setCategories] = useState<string[]>(['Action']);

  const { gamesList, isLoading, fetchNextPage } = useGamesListQuery(categories);

  const styles = useStyles(homeStyles);

  return (
    <ImageBackground
      style={styles.homeScreen}
      source={loginBackground}
      blurRadius={60}>
      <TextBlock style={styles.screenHeading}>Popular Games</TextBlock>

      <ToggleFilterList
        filters={categoryFilters}
        title="Select category"
        activeFilters={categories}
        scrollViewContent={styles.toggleFilterListContent}
        textStyle={styles.toggleFilterListHeading}
        style={styles.toggleFilterList}
        onFiltersChange={activeCategories => setCategories(activeCategories)}
      />

      {isLoading ? (
        <Loader style={styles.loader} />
      ) : (
        <FlatList
          data={gamesList}
          keyExtractor={item => item.id + ''}
          renderItem={({ item }) => <GameCard gameDetails={item} />}
          contentContainerStyle={styles.gameListContent}
          onEndReached={() => fetchNextPage()}
          ListFooterComponent={() => <Loader style={styles.loader} />}
          style={styles.gameList}
        />
      )}
    </ImageBackground>
  );
}

export default Home;
