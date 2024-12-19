import { Dimensions, PixelRatio } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function widthPercentageToDP(widthPercent: string | number) {
  const { width: screenWidth } = Dimensions.get('screen');

  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
}

export function heightPercentageToDP(heightPercent: string | number) {
  const { height: screenHeight } = Dimensions.get('screen');

  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}

export function horizontalScale(size: number) {
  const dim = Dimensions.get('screen');
  const width = Math.min(dim.width, dim.height);

  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size: number) {
  const dim = Dimensions.get('screen');
  const height = Math.max(dim.width, dim.height);
  // const height = dim.height;

  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size: number, factor: number = 0.5) {
  return size + (horizontalScale(size) - size) * factor;
}

export function isLandscape() {
  const dim = Dimensions.get('window');

  return dim.width > dim.height;
}
