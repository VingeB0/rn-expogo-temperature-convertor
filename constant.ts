export const DEFAULT_TEMPERATURE: string = '0';

export type UnitType = 'celcius' | 'faranheit';
export const UNITS: { [key in UnitType]: string } = {
  celcius: '°C',
  faranheit: '°F',
};
export const DEFAULT_UNIT = UNITS.celcius as UnitType;
