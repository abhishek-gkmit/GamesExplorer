import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';
import { ellipsize } from '@utility/helpers';
import { collectionCardPlaceholder } from '@constants/images';

import collectionCardStyles from './styles';

function CollectionCard({ collection }: CollectionCardPropos) {
  const styles = useStyles(collectionCardStyles);

  return (
    <View style={styles.collectionCard}>
      <FastImage
        source={{ uri: collection.backgroundImage }}
        defaultSource={collectionCardPlaceholder}
        style={styles.collectionImage}
      />
      <TextBlock style={styles.collectionName}>
        {ellipsize(collection.name, 25)}
      </TextBlock>
    </View>
  );
}

export default CollectionCard;
