import React, { PropsWithChildren } from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { fonts } from 'shared/styles/font';

type Props = PropsWithChildren<
  TextProps & {
    variant?: 'regular' | 'medium' | 'semi_bold';
    size?: number;
  }
>;

export const Text = (props: Props) => {
  const { variant = 'regular', size = 14, children, ...rest } = props;
  const { theme_value } = useAppStore();

  return (
    <RNText
      {...rest}
      style={{
        ...fonts[variant],
        fontSize: size,
        color: colors[theme_value].textSolid,
        ...rest.style,
      }}
    >
      {children}
    </RNText>
  );
};
