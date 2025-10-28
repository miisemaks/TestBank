import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from 'shared/types/IconProps';

export const Gift = ({ size = 24 }: Omit<IconProps, 'color'>) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5V7.5H13V5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5C17 5.22614 16.8203 6.08463 15.9453 6.66795L14.4453 7.66795L15.5547 9.33205L17.0547 8.33205C18.5797 7.31537 19 5.77386 19 5C19 2.79086 17.2091 1 15 1C13.8053 1 12.7329 1.52376 12 2.35418C11.2671 1.52376 10.1947 1 9 1C6.79086 1 5 2.79086 5 5C5 5.77386 5.42027 7.31537 6.9453 8.33205L8.4453 9.33205L9.5547 7.66795L8.0547 6.66795C7.17973 6.08463 7 5.22614 7 5Z"
        fill="#FE5900"
      />
      <Path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 7H23V12.5H22V23H2V12.5H1V7Z"
        fill="#FE5900"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12.5H2V14.5H11V23H13V14.5H22V12.5Z"
        fill="#FE5900"
      />
    </Svg>
  );
};
