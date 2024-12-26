import { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';

import TextBlock from '@components/customText';
import ButtonWithIcon from '@components/buttonWithIcon';
import IconButton from '@components/iconButton';
import Loader from '@components/customLoader';
import useStyles from '@hooks/useStyles';
import useCollectionsQuery from '@network/hooks/useCollectionsQuery';
import useCollectionsMutation from '@network/hooks/useCollectionsMutation';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { showInfoToast, showSuccessToast } from '@utility/toastHelpers';
import { ellipsize } from '@utility/helpers';
import { iconFamilies } from '@constants';
import { collectionCardPlaceholder } from '@constants/images';

import collectionsMgmtStyles from './styles';

function CollectionCard({ collection, hasGameAdded }: CollectionCardPropos) {
  const [checked, setChecked] = useState(hasGameAdded);
  const [loading, setLoading] = useState(false);

  const route = useRoute<MainStackRouteProp>();
  const gameId = +route.params!.gameId;

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsMgmtStyles);

  const { addToCollection, removeFromCollection } =
    useCollectionsMutation(gameId);

  const handleCollectionPress = useCallback(() => {
    const collectionId = collection.id;

    setLoading(true);
    if (checked) {
      removeFromCollection.mutate(collectionId, {
        onSuccess: () => setChecked(false),
        onSettled: () => setLoading(false),
      });
    } else {
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
      style={styles.collectionCard}
      activeOpacity={0.9}
      onPress={handleCollectionPress}>
      <View style={styles.collectionImageAndNameContainer}>
        <FastImage
          source={{ uri: collection.backgroundImage }}
          defaultSource={collectionCardPlaceholder}
          style={styles.collectionImage}
        />
        <TextBlock style={styles.collectionName}>
          {ellipsize(collection.name, 25)}
        </TextBlock>
      </View>

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

function CreateNewCollection({
  cancelNewCollection,
  gameId,
}: CreateNewCollectionProps) {
  const [collectionName, setCollectionName] = useState('');

  const { createCollection } = useCollectionsMutation(gameId);

  const handlePress = () => {
    if (collectionName === '') {
      showInfoToast('Info', 'Empty collection name not allowed.');
      return;
    }

    createCollection.mutate(collectionName, {
      onSettled: () => {
        cancelNewCollection();
        showSuccessToast('Success', 'Collection created.');
      },
    });
  };

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsMgmtStyles);

  return (
    <View style={styles.createNewCollection}>
      <TextBlock style={styles.createNewCollectionHeading}>
        Create new collection
      </TextBlock>
      <TextInput
        value={collectionName}
        onChangeText={text => setCollectionName(text)}
        style={styles.nameInput}
        cursorColor={colors.secondary}
        autoFocus
        autoCapitalize="sentences"
        placeholder="Enter collection name"
      />

      <View style={styles.btnsContainer}>
        <ButtonWithIcon
          text="Cancel"
          style={styles.cancelBtn}
          onPress={cancelNewCollection}
        />
        <ButtonWithIcon
          text="Create"
          style={styles.createBtn}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

function CollectionsManagement() {
  const [isCreatingNewCollection, setIsCreatingNewCollection] = useState(false);

  const navigation = useNavigation<MainStackNavigationProp>();
  const route = useRoute<MainStackRouteProp>();

  const gameId = +route.params!.gameId;

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
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  hasGameAdded={hasGameAdded}
                />
              );
            })}
        </ScrollView>

        {isCreatingNewCollection ? (
          <CreateNewCollection
            gameId={gameId}
            cancelNewCollection={() => setIsCreatingNewCollection(false)}
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
