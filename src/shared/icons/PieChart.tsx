import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const PieChart = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_8083_162)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8335 0.00854492H11.6668C16.2645 0.00854492 19.9917 3.73571 19.9917 8.33342V9.16675H19.1583H11.6668H10.8335V0.00854492ZM0.044754 11.6305C0.044754 7.03283 3.77192 3.30567 8.36958 3.30567H9.20291V4.139V10.7972H15.8612H16.6945V11.6305C16.6945 16.2283 12.9673 19.9554 8.36958 19.9554C3.77192 19.9554 0.044754 16.2283 0.044754 11.6305Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8083_162">
          <Rect width="20" height="20" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
