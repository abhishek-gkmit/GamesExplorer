import { iconFamilies } from '@constants';
import { ReactElement } from 'react';
import { ImageStyle } from 'react-native-fast-image';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import {
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
  FlatListProps,
  ViewProps,
} from 'react-native/types';

declare global {
  type TextBlockProps = TextProps;

  type IconFamilies = (typeof iconFamilies)[keyof typeof iconFamilies];

  interface Icon {
    name: string;
    color?: string;
    size?: number;
  }

  interface BottomTabProps {
    isFocused: boolean;
    title: string;
    onPress: () => void;
  }

  interface InputProps extends TextInputProps {
    value?: string;
    setValue?: (value: string) => void;
    icon?: Icon;
  }

  interface ButtonWithIconProps extends TouchableOpacityProps {
    text: string;
    icon?: Icon;
    iconPosition?: 'start' | 'end';
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
  }

  interface IconButtonProps extends TouchableOpacityProps {
    icon: Icon;
    btnStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ViewStyle>;
    iconFamily?: IconFamilies;
  }

  interface CustomLoaderProps {
    size?: 'small' | 'large' | number;
    style?: StyleProp<ViewStyle>;
  }

  interface EmptyListIndicatorProps {
    title?: string;
  }

  interface FadeInSlideUpProps {
    delay?: number;
    style?: StyleProp<ViewStyle>;
    duration?: number;
    from?: number;
    to?: number;
    children: ReactNode;
  }

  interface SlideInProps {
    delay?: number;
    style?: StyleProp<ViewStyle>;
    duration?: number;
    from?: number;
    to?: number;
    children: ReactNode;
  }

  interface InputComponentProps extends TextInputProps {
    setValue: (value: string) => void;
    errorMsg?: string;
    label?: string;
    icon?: Icon;
  }

  interface GamePlatformsProps {
    platforms: string[];
    iconSize?: number;
    style?: StyleProp<ViewStyle>;
  }

  interface RatingProps {
    rating: number;
  }

  interface GameCardProps {
    gameDetails: GameDetailsShort;
  }

  interface ToggleButtonProps {
    title?: string;
    toggleState?: boolean;
    showIcon?: boolean;
    onToggle?: (toggleState: boolean) => void;
  }

  interface ToggleFilterListProps {
    filters: string[];
    activeFilters: string[];
    title?: string;
    selectMultipleFilters?: boolean;
    onFiltersChange?: (filters: string[]) => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    scrollView?: StyleProp<ViewStyle>;
    scrollViewContent?: StyleProp<ViewStyle>;
  }

  interface ChipProps {
    text: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
  }

  interface GamePlatformsDetaildProps {
    platforms: GamePlatform[];
  }

  interface CollectionCardPropos {
    collection: GameCollection;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    textStyle?: StyleProp<TextStyle>;
  }

  interface CreateOrEditCollectionProps extends ViewProps {
    cancelAction: () => void;
    gameId?: number;
    collection?: Pick<GameCollection, 'id' | 'name'>;
    isEdit?: boolean;
  }
}
