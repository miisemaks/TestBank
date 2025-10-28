import React, { memo, useState } from 'react';
import { Image, ImageStyle, View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { colors } from 'shared/styles/colors';
import { useAppStore } from 'shared/store';
import { ImageIcon } from 'shared/icons/Image';

type Props = {
  size?: number;
  style?: ImageStyle;
  url?: string | null;
};

export const Avatar = memo((props: Props) => {
  const { size = 36, style, url } = props;
  const [loading, setLoading] = useState(false);
  const { theme_value } = useAppStore();

  if (url) {
    return (
      <View>
        <Image
          style={{
            width: size,
            height: size,
            borderRadius: 12,
            ...style,
          }}
          source={{ uri: url }}
          onLoad={() => {
            setLoading(false);
          }}
          onError={() => {
            setLoading(false);
          }}
        />
        {loading ? (
          <ContentLoader
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            backgroundColor={colors[theme_value].background}
            foregroundColor={colors[theme_value].skeleton}
            style={{
              position: 'absolute',
            }}
          >
            <Rect rx={12} ry={12} width={size} height={size} />
          </ContentLoader>
        ) : null}
      </View>
    );
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        backgroundColor: colors[theme_value].textSecondary3,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <ImageIcon size={size / 2} color={colors[theme_value].textSolid} />
    </View>
  );
});
