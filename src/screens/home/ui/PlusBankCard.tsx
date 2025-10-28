import React from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Plus } from 'shared/icons';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';

type Props = {
  bank_card_length: number;
  onPress: () => void;
};

export const PlusBankCard = (props: Props) => {
  const { bank_card_length, onPress } = props;
  const { theme_value } = useAppStore();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={{
        width:
          bank_card_length > 1
            ? width -
              ((width * 142) / 375 + 8) * bank_card_length -
              32 -
              insets.left -
              insets.right
            : (width * 142) / 375,
        height: 98,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors[theme_value].container,
        borderRadius: 16,
      }}
      onPress={onPress}
    >
      <Plus size={16} color={colors[theme_value].foreground} />
    </TouchableOpacity>
  );
};
