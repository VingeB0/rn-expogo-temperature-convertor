import { TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  unit: string;
  onPress: () => void;
};
