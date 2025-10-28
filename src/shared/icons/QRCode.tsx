import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const QRCode = ({ size = 24, color = 'black' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_2118_15600)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.833336 0.833336H7.5V2.5H2.5V7.5H0.833336V0.833336ZM4.16667 9.16667V8.33334V5V4.16667H5H8.33334H9.16667V9.16667H4.16667ZM5.83334 7.5H7.5V5.83334H5.83334V7.5ZM10.8333 9.16667V4.16667H11.6667H15H15.8333V9.16667H10.8333ZM12.5 7.5H14.1667V5.83334H12.5V7.5ZM4.16667 15V15.8333H9.16667V10.8333H4.16667V11.6667V15ZM7.5 14.1667H5.83334V12.5H7.5V14.1667ZM1.66667 19.1667H0.833336V12.5H2.5V17.5H7.5V19.1667H1.66667ZM19.1667 0.833336V7.5H17.5V2.5H12.5V0.833336H19.1667ZM19.1667 18.3333V19.1667H12.5V17.5H17.5V12.5H19.1667V18.3333ZM10.8333 10.8333V15.8333H16.0417V14.1667H12.5V10.8333H10.8333ZM14.1667 10.8333V12.5H15.8333V10.8333H14.1667Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2118_15600">
          <Rect width="20" height="20" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
