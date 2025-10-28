import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const ChevronLeft = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" />
    </Svg>
  );
};
