import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const InvestingAndBanking = ({
  size = 24,
  color = 'black',
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_8083_151)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4972 0.0675659L14.9198 1.49015L19.1601 5.73045L19.7493 6.3197L19.1601 6.90895L14.9198 11.1493L13.4972 12.5719V9.1101H8.27839V3.52931H13.4972V0.0675659ZM6.50277 7.42434L5.08018 8.84694L0.839898 13.0872L0.250641 13.6764L0.839898 14.2657L5.08018 18.506L6.50277 19.9286V16.4669H11.7216V10.8861H6.50277V7.42434Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8083_151">
          <Rect width="20" height="20" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
