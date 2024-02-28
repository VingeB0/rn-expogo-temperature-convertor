import { Text, TextInput, View } from 'react-native';

import { s } from './Input.style';
import { InputProps } from './types';

export function Input({ defaultValue, onChangeText, unit }: InputProps) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        returnKeyType="done"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
