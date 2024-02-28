import { UNITS } from '../constant';

function getOppositUnit(unit: string) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperatureTo(unit: string, value: number) {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

function isIceTemperature(value: string, unit: string) {
  const numberValue = Number(value);
  if (unit === UNITS.celcius) {
    return numberValue <= 0;
  } else {
    return numberValue <= 32;
  }
}

export { getOppositUnit, convertTemperatureTo, isIceTemperature };
