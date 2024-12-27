import { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextBlock from '@components/customText';
import ButtonWithIcon from '@components/buttonWithIcon';
import IconButton from '@components/iconButton';
import Loader from '@components/customLoader';
import CollectionCard from '@components/cllectionCard';
import useStyles from '@hooks/useStyles';
import useCollectionsQuery from '@network/hooks/useCollectionsQuery';
import useCollectionsMutation from '@network/hooks/useCollectionsMutation';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { iconFamilies } from '@constants';

import collectionsMgmtStyles from './styles';
import CreateOrEditCollection from '@components/createOrEditCollection/CreateOrEditCollection';

interface CollectionCardManagerProps extends CollectionCardPropos {
  hasGameAdded: boolean;
}

function CollectionCardManager({
  collection,
  hasGameAdded,
}: CollectionCardManagerProps) {
  const [checked, setChecked] = useState(hasGameAdded);
  const [loading, setLoading] = useState(false);

  const route = useRoute<CollectionsMgmtRouteProp>();
  const gameId = +route.params!.gameId;

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsMgmtStyles);

  const { addToCollection, removeFromCollection } =
    useCollectionsMutation(gameId);

  const handleCollectionPress = useCallback(() => {
    const collectionId = collection.id;

    setLoading(true);
    if (checked) {
      removeFromCollection &&
        removeFromCollection.mutate(collectionId, {
          onSuccess: () => setChecked(false),
          onSettled: () => setLoading(false),
        });
    } else {
      addToCollection &&
        addToCollection.mutate(collectionId, {
          onSuccess: () => setChecked(true),
          onSettled: () => setLoading(false),
        });
    }

    return true;
  }, [
    addToCollection,
    removeFromCollection,
    checked,
    collection,
    setChecked,
    setLoading,
  ]);

  return (
    <TouchableOpacity
      style={styles.collectionCardManager}
      activeOpacity={0.95}
      onPress={handleCollectionPress}>
      <CollectionCard collection={collection} />

      <View>
        {loading ? (
          <Loader style={styles.collectionCardLoader} size={'small'} />
        ) : (
          <MaterialIcons
            name={checked ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={checked ? colors.primary : colors.foreground}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

function CollectionsManagement() {
  const [isCreatingNewCollection, setIsCreatingNewCollection] = useState(false);

  const navigation = useNavigation<MainStackNavigationProp>();
  const route = useRoute<CollectionsMgmtRouteProp>();

  const gameId = route.params.gameId;

  const { collections, gameInCollections } = useCollectionsQuery(gameId);

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsMgmtStyles);

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.collectionsMgmtOverlay}>
      <View style={styles.collectionsMgmt}>
        <View style={styles.collectionsMgmtHeader}>
          <TextBlock style={styles.collectionsMgmtHeading}>
            Add to collection
          </TextBlock>
          <IconButton
            icon={{ name: 'cancel', size: 28, color: colors.foreground }}
            iconFamily={iconFamilies.material}
            onPress={goBack}
            style={styles.closeBtn}
          />
        </View>

        <ScrollView
          style={styles.collectionsCardsContainer}
          contentContainerStyle={styles.collectionsCardsContainerContent}>
          {collections &&
            collections.map(collection => {
              // !! for typecasting to boolean
              const hasGameAdded = !!gameInCollections?.find(
                collectionId => collection.id === collectionId,
              );
              return (
                <CollectionCardManager
                  key={collection.id}
                  collection={collection}
                  hasGameAdded={hasGameAdded}
                />
              );
            })}
        </ScrollView>

        {isCreatingNewCollection ? (
          <CreateOrEditCollection
            gameId={gameId}
            cancelAction={() => setIsCreatingNewCollection(false)}
          />
        ) : (
          <ButtonWithIcon
            text="Create new collection"
            style={styles.newCollectionBtn}
            onPress={() => setIsCreatingNewCollection(true)}
          />
        )}
      </View>
    </View>
  );
}

export default CollectionsManagement;
