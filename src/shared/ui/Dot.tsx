import React from 'react';
import { View } from 'react-native';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';

type Props = {
  size?: number;
  variant: 'danger' | 'warning';
};

export const Dot = (props: Props) => {
  const { size = 6, variant } = props;
  const { theme_value } = useAppStore();

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor:
          variant === 'danger'
            ? colors[theme_value].danger
            : colors[theme_value].warning,
      }}
    />
  );
};
