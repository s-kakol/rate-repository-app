import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#f2f2f2',
    primary: '#0366d6',
    background: '#e1e4e8',
    navBackground: '#24292e',
    inputBorder: '#d3d3d3',
    error: '#cc0000',
    lighterRed: '#e60000',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'sans-serif',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
