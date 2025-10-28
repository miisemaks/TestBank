import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const HomeIcon = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.125 8.25385L10.5 0.00384521L0.875 8.25385V19.1666H20.125V8.25385Z"
        fill={color}
      />
    </Svg>
  );
};
