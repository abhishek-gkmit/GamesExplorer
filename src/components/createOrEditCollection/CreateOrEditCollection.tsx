import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TextBlock from '@components/customText';
import ButtonWithIcon from '@components/buttonWithIcon';
import useStyles from '@hooks/useStyles';
import useCollectionsMutation from '@network/hooks/useCollectionsMutation';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { showInfoToast, showSuccessToast } from '@utility/toastHelpers';

import collectionsMgmtStyles from './styles';

function CreateOrEditCollection({
  cancelAction,
  isEdit,
  gameId,
  collection,
  style,
  ...props
}: CreateOrEditCollectionProps) {
  const [collectionName, setCollectionName] = useState(collection?.name || '');

  const navigation = useNavigation<MainStackNavigationProp>();

  const { createCollection, updateCollectionName } =
    useCollectionsMutation(gameId);

  const handlePress = () => {
    if (collectionName === '') {
      showInfoToast('Info', 'Empty collection name not allowed.');
      return;
    }

    if (isEdit && collection?.id) {
      updateCollectionName.mutate(
        { collectionId: collection.id, name: collectionName },
        {
          onSettled: () => {
            cancelAction();
            showSuccessToast('Success', 'Collection updated.');
            navigation.goBack();
          },
        },
      );
    } else {
      createCollection.mutate(collectionName, {
        onSettled: () => {
          cancelAction();
          showSuccessToast('Success', 'Collection created.');
        },
      });
    }
  };

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsMgmtStyles);

  return (
    <View
      style={StyleSheet.compose(styles.createNewCollection, style)}
      {...props}>
      <TextBlock style={styles.createNewCollectionHeading}>
        {isEdit ? 'Edit collection' : 'Create new collection'}
      </TextBlock>
      <TextInput
        value={collectionName}
        onChangeText={text => setCollectionName(text)}
        style={styles.nameInput}
        cursorColor={colors.secondary}
        autoFocus
        autoCapitalize="sentences"
        placeholder="Edit collection name"
      />

      <View style={styles.btnsContainer}>
        <ButtonWithIcon
          text="Cancel"
          style={styles.cancelBtn}
          onPress={cancelAction}
        />
        <ButtonWithIcon
          text={isEdit ? 'Update' : 'Create'}
          style={styles.createBtn}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

export default CreateOrEditCollection;
