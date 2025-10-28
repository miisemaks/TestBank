import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const Readed = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17.4596H7.89131V20.5L11.8603 17.4596H21V3.5H5.43168L3 3.5L3 17.4596ZM11.0776 10.6648L9.73603 9.3958L8.33852 10.7177L9.68013 11.9603L11.0497 13.2823L12.4472 11.9868L15.6335 8.99922L14.264 7.67729L11.0776 10.6648Z"
        fill={color}
      />
    </Svg>
  );
};
