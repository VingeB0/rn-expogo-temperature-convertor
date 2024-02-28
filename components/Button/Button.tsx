import { Text, TouchableOpacity } from 'react-native';

import { s } from './Button.style';
import { ButtonProps } from './types';

export function Button({ onPress, unit }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
