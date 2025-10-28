import React from 'react';
import { Line, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const Plus = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Line
        x1="8.25"
        y1="1"
        x2="8.25"
        y2="15"
        stroke={color}
        strokeWidth="1.5"
      />
      <Line
        x1="15"
        y1="7.75"
        x2="1"
        y2="7.75"
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
};
