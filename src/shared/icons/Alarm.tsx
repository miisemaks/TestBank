import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const Alarm = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.495 0.666504C8.06429 0.666504 5.73313 1.63228 4.01435 3.35136C2.29558 5.07045 1.32999 7.40206 1.32999 9.83315C1.32999 12.2643 2.29558 14.5959 4.01435 16.315C5.73313 18.0341 8.06429 18.9998 10.495 18.9998C12.9257 18.9998 15.2569 18.0341 16.9756 16.315C18.6944 14.5959 19.66 12.2643 19.66 9.83315C19.66 7.40206 18.6944 5.07045 16.9756 3.35136C15.2569 1.63228 12.9257 0.666504 10.495 0.666504ZM9.66178 4.83331V10.6666H13.8277V8.99998H11.3281V4.83331H9.66178Z"
        fill={color}
      />
    </Svg>
  );
};
