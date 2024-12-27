import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ImageBackground,
  FlatList,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GameCard from '@components/gameCard';
import TextBlock from '@components/customText';
import Loader from '@components/customLoader';
import ToggleFilterList from '@components/toggleFilterList';
import EmptyListIndicator from '@components/emptyListIndicator';
import IconButton from '@components/iconButton';
import useStyles from '@hooks/useStyles';
import useGamesListQuery from '@network/hooks/useGamesListQuery';
import { useAppDispatch, useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { loginBackground } from '@constants/images';
import { categoryFilters, iconFamilies } from '@constants';

import homeStyles from './styles';
import { removeUserKey, setUserDetails } from '@store/reducers/user';
import useUserQuery from '@network/hooks/useUserQuery';

interface MenuProps { }

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useAppDispatch();

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(homeStyles);

  const handleLogoutBtnPress = useCallback(() => {
    setShowMenu(false);

    Alert.alert('Logout', 'Are you sure you want logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          dispatch(removeUserKey());
        },
      },
    ]);
  }, [setShowMenu]);

  return (
    <View>
      <IconButton
        icon={{ name: 'account-circle', size: 30, color: colors.foreground }}
        iconFamily={iconFamilies.materialCommunity}
        onPress={() => setShowMenu(showMenu => !showMenu)}
        style={styles.menuBtn}
      />

      {showMenu ? (
        <>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowMenu(false)}
            style={styles.menuOverlay}></TouchableOpacity>

          <View style={styles.menuContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleLogoutBtnPress}>
              <TextBlock style={styles.logoutOption}>Logout</TextBlock>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
}

function Home() {
  const [categories, setCategories] = useState<string[]>(['Action']);

  const { gamesList, isLoading, getNextPage } = useGamesListQuery(categories);

  const { userDetails, isFetching } = useUserQuery();

  const dispatch = useAppDispatch();

  const styles = useStyles(homeStyles);

  const listFooter = useMemo(() => {
    if (!gamesList || !gamesList.hasNextPage) {
      return null;
    }

    return <Loader style={styles.listLoader} />;
  }, [gamesList]);

  useEffect(() => {
    userDetails && dispatch(setUserDetails(userDetails));
  }, [userDetails]);

  return (
    <View style={styles.homeScreen}>
      <ImageBackground
        style={styles.homeHeader}
        source={loginBackground}
        blurRadius={60}>
        <View style={styles.headingAndProfile}>
          <TextBlock style={styles.screenHeading}>Popular Games</TextBlock>

          <Menu />
        </View>

        <ToggleFilterList
          filters={categoryFilters}
          activeFilters={categories}
          scrollViewContent={styles.toggleFilterListContent}
          textStyle={styles.toggleFilterListHeading}
          style={styles.toggleFilterList}
          onFiltersChange={activeCategories => setCategories(activeCategories)}
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

export default Home;
