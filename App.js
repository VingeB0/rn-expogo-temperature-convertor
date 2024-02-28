import { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';

import { s } from './App.style';
import coldBackground from './assets/cold.png';
import hotBackground from './assets/hot.png';
import { TemperatureDisplay, Input, Button } from './components';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from './constant';
import {
  getOppositUnit,
  convertTemperatureTo,
  isIceTemperature,
} from './services/temperature-service';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositeUnit = getOppositUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) ? '' : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay value={getConvertedTemperature()} unit={oppositeUnit} />
        <Input onChangeText={setInputValue} defaultValue={DEFAULT_TEMPERATURE} unit={currentUnit} />
        <View>
          <Button
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
