import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';

type Props = PropsWithChildren<{
  variant?: 'rounded' | 'circle';
  size?: number;
  style?: ViewStyle;
  transparent?: boolean;
}>;

export const IconContainer = (props: Props) => {
  const {
    children,
    variant = 'rounded',
    size = 36,
    transparent,
    style,
  } = props;
  const { theme_value } = useAppStore();

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: variant === 'rounded' ? size / 3 : size / 2,
        backgroundColor: transparent
          ? 'transparent'
          : colors[theme_value].container,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </View>
  );
};
