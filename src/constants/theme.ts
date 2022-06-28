import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#ff8906',
  gradient: 'linear-gradient(0deg, #536976 0%, #292e49 100%)',

  white: '#eff0f3',
  lightGreen: '#4BEE70',
  bg: '#1f1f1f',
  black: '#393939',
  gray: '#535353',
  gray1: '#1f1f1f',
  lightGray: '#3B3B3B',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
