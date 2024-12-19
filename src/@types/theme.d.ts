import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';

declare global {
  type Colors = (typeof colors)[keyof typeof colors];

  type Gradient = string[];

  type Gradients = (typeof GRADIENTS)[keyof typeof GRADIENTS];
}
