import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const TransferCart = ({ size = 24 }: Omit<IconProps, 'color'>) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_2118_15612)">
        <Path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 7H8V18H20V7H9Z"
          fill="#FE5900"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 15H13V13H17V15Z"
          fill="#FE5900"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70718 2.57227L3.20718 0.0722656L1.79297 1.48648L4.00009 3.6936L4.00056 18.1706C2.83511 18.5823 2.00008 19.6937 2.00008 21.0001C2.00008 22.6569 3.34322 24.0001 5.00008 24.0001C6.30629 24.0001 7.41753 23.1653 7.82937 22.0001H19.0859L20.793 23.7072L22.2072 22.293L20.2072 20.293L19.9143 20.0001H7.82937C7.52814 19.1478 6.85274 18.4723 6.00056 18.171L6.00008 3.27934L6.00006 2.86515L5.70718 2.57227Z"
          fill="#FE5900"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2118_15612">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
