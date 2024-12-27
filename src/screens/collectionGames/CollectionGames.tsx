import { useCallback, useMemo, useState } from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextBlock from '@components/customText';
import GameCard from '@components/gameCard';
import Loader from '@components/customLoader';
import EmptyListIndicator from '@components/emptyListIndicator';
import IconButton from '@components/iconButton';
import CreateOrEditCollection from '@components/createOrEditCollection/CreateOrEditCollection';
import useStyles from '@hooks/useStyles';
import useCollectionFeedQuery from '@network/hooks/useCollectionFeedQuery';
import useCollectionsMutation from '@network/hooks/useCollectionsMutation';
import { showSuccessToast } from '@utility/toastHelpers';
import { loginBackground } from '@constants/images';
import { iconFamilies } from '@constants';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';

import collectionGamesStyles from './styles';

interface EditModalProps {
  show: boolean;
  hideModal: () => void;
  collection: Pick<GameCollection, 'id' | 'name'>;
}

function EditModal({ show, collection, hideModal }: EditModalProps) {
  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionGamesStyles);

  return (
    <Modal visible={show} transparent>
      <View style={styles.editModal}>
        <CreateOrEditCollection
          isEdit={true}
          cancelAction={hideModal}
          collection={collection}
          style={styles.editDialog}
        />
      </View>
    </Modal>
  );
}

interface MenuProps {
  handleEditClick: () => void;
  collection: Pick<GameCollection, 'id' | 'name'>;
}

function Menu({ handleEditClick, collection }: MenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  const { removeCollection } = useCollectionsMutation();

  const navigation = useNavigation<MainStackNavigationProp>();

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionGamesStyles);

  const handleDeleteBtnClick = useCallback(() => {
    setShowMenu(false);

    Alert.alert('Delete', 'Are you sure you want to delete this collection?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          removeCollection.mutate(collection.id, {
            onSuccess: () => {
              showSuccessToast('Success', 'Collection deleted.');
              navigation.goBack();
            },
            onError: () =>
              showSuccessToast('Error', 'Collection deletion failed.'),
          });
        },
      },
    ]);
  }, [setShowMenu, removeCollection, collection]);

  return (
    <>
      <View>
        <IconButton
          icon={{ name: 'dots-vertical', size: 22, color: colors.foreground }}
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
              <TouchableOpacity activeOpacity={0.9} onPress={handleEditClick}>
                <TextBlock style={styles.editMenuOption}>Edit</TextBlock>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleDeleteBtnClick}>
                <TextBlock style={styles.deleteMenuOption}>Delete</TextBlock>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
}

function CollectionGames() {
  const [showEditModal, setShowEditModal] = useState(false);

  const navigation = useNavigation<MainStackNavigationProp>();
  const route = useRoute<CollectionGamesRouteProp>();
  const { collectionName, collectionId } = route.params;

  const { collectionFeedGames, isLoading, getNextPage } =
    useCollectionFeedQuery(collectionId);

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionGamesStyles);

  const listFooter = useMemo(() => {
    if (!collectionFeedGames || !collectionFeedGames.hasNextPage) {
      return null;
    }

    return <Loader style={styles.listLoader} />;
  }, [collectionFeedGames]);

  const handleEditBtnClick = useCallback(() => {
    setShowEditModal(true);
  }, []);

  return (
    <>
      <View style={styles.collectionsScreen}>
        <ImageBackground
          style={styles.collectionsHeader}
          source={loginBackground}
          blurRadius={60}>
          <View style={styles.backBtnAndHeadingcontainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={20}
                color={colors.foreground}
              />
            </TouchableOpacity>

            <TextBlock style={styles.collectionsHeading} numberOfLines={1}>
              {collectionName}
            </TextBlock>
          </View>

          <Menu
            handleEditClick={handleEditBtnClick}
            collection={{ id: collectionId, name: collectionName }}
          />
        </ImageBackground>

        <FlatList
          data={collectionFeedGames?.formattedGamesOfCollections}
          keyExtractor={item => item.id + ''}
          renderItem={({ item }) => <GameCard gameDetails={item} />}
          contentContainerStyle={styles.gameListContent}
          onEndReached={getNextPage}
          ListFooterComponent={listFooter}
          ListEmptyComponent={() => (
            <EmptyListIndicator title="No games in collection" />
          )}
          style={styles.gameList}
        />
      </View>

      <EditModal
        show={showEditModal}
        collection={{ id: collectionId, name: collectionName }}
        hideModal={() => setShowEditModal(false)}
      />
    </>
  );
}

export default CollectionGames;
