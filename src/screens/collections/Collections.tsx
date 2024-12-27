import {
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import CollectionCard from '@components/cllectionCard';
import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';
import useCollectionsQuery from '@network/hooks/useCollectionsQuery';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';
import { loginBackground } from '@constants/images';
import ROUTES from '@constants/routes';

import collectionsScreenStyles from './styles';

function Collections() {
  const { collections, isFetchingAllCollections } = useCollectionsQuery();

  const navigation = useNavigation<MainStackNavigationProp>();

  const { colors } = useAppSelector(selectTheme);
  const styles = useStyles(collectionsScreenStyles);

  return (
    <View style={styles.collectionsScreen}>
      <ImageBackground
        style={styles.collectionsHeader}
        source={loginBackground}
        blurRadius={60}>
        <TextBlock style={styles.collectionsHeading}>Collections</TextBlock>
      </ImageBackground>
      <ScrollView
        style={styles.collectionsContainer}
        contentContainerStyle={styles.collectionsContainerContent}>
        {collections?.map(collection => (
          <TouchableOpacity
            key={collection.id}
            activeOpacity={0.95}
            onPress={() =>
              navigation.navigate(ROUTES.MainStack.CollectionGames, {
                collectionId: collection.id,
                collectionName: collection.name,
              })
            }
            style={styles.collectionCardContainer}>
            <CollectionCard
              collection={collection}
              style={styles.collectionCard}
            />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={18}
              color={colors.foreground}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Collections;
