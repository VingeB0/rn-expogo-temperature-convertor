import { Text } from 'react-native';

import { s } from './TemperatureDisplay.style';
import { TemperatureDisplayProps } from './types';
export function TemperatureDisplay({ value, unit }: TemperatureDisplayProps) {
  return (
    <Text style={s.text}>
      {value} {unit}
    </Text>
  );
}
