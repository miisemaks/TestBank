import { TextStyle } from 'react-native';

type FontType = {
  regular: TextStyle;
  medium: TextStyle;
  semi_bold: TextStyle;
};

export const fonts: FontType = {
  regular: {
    fontFamily: 'Inter_18pt-Regular',
    fontWeight: 400,
  },
  medium: {
    fontFamily: 'Inter_18pt-Medium',
    fontWeight: 500,
  },
  semi_bold: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontWeight: 600,
  },
};
