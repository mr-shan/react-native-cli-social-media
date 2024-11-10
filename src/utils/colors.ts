import {Appearance, ColorSchemeName} from 'react-native';
import { ColorType } from './types';

const darkThemeColors = {
  text100: '#aaa',
  text300: '#ccc',
  text500: '#eee',
  text700: '#fff',
  textInactive: '#777',
  bg300: '#111',
  bg500: '#333',
  bg700: '#666',
  bg900: '#000',
  primary300: '#63c7f2',
  primary500: '#50b0da',
  primary700: '#2e8eb7',
  secondary300: '#faba96',
  secondary500: '#ffab7b',
  secondary700: '#ed9968',
} as ColorType;

const lightThemeColors = {
  text100: '#888',
  text300: '#444',
  text500: '#333',
  text700: '#111',
  textInactive: '#999',
  bg300: '#ccc',
  bg500: '#eee',
  bg700: '#f0f0f0',
  bg900: '#fff',
  primary300: '#63c7f2',
  primary500: '#50b0da',
  primary700: '#2e8eb7',
  secondary300: '#faba96',
  secondary500: '#ffab7b',
  secondary700: '#ed9968',
} as ColorType;

let Colors = lightThemeColors;

Appearance.addChangeListener(preference => {
  initColors(preference.colorScheme);
});

const initColors = (colorScheme: ColorSchemeName) => {
  if (colorScheme === 'dark') {
    Colors = darkThemeColors;
  } else {
    Colors = lightThemeColors;
  }
};

initColors(Appearance.getColorScheme());

export default Colors;
