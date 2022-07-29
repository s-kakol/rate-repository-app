import { Text as NativeText, StyleSheet } from 'react-native';

import Theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: Theme.colors.textPrimary,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.main,
    fontWeight: Theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: Theme.colors.textSecondary,
  },
  colorTextWhite: {
    color: Theme.colors.textWhite,
  },
  colorTextError: {
    color: Theme.colors.error,
  },
  colorPrimary: {
    color: Theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: Theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: Theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textWhite' && styles.colorTextWhite,
    color === 'primary' && styles.colorPrimary,
    color === 'error' && styles.colorTextError,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
