import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Earth, Gift, Support } from 'shared/icons';
import { TransferCart } from 'shared/icons/TransferCart';
import { Text } from 'shared/ui/Text';

type ItemProps = {
  icon: ReactNode;
  text: string;
  onPress: () => void;
};

const Item = React.memo((props: ItemProps) => {
  const { icon, text, onPress } = props;
  return (
    <TouchableOpacity style={styles.screensView} onPress={onPress}>
      {icon}
      <Text variant="medium">{text}</Text>
    </TouchableOpacity>
  );
});

type Props = {
  onPressTravel: () => void;
  onPressDelivery: () => void;
  onPressBonuses: () => void;
  onPressSupport: () => void;
};

export const ScreenButtons = (props: Props) => {
  const { onPressTravel, onPressDelivery, onPressBonuses, onPressSupport } =
    props;
  return (
    <View style={styles.main}>
      <Item icon={<Earth />} text="Travel" onPress={onPressTravel} />
      <Item icon={<TransferCart />} text="Delivery" onPress={onPressDelivery} />
      <Item icon={<Gift />} text="Bonuses" onPress={onPressBonuses} />
      <Item icon={<Support />} text="Support" onPress={onPressSupport} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  screensView: {
    paddingHorizontal: 4.5,
    paddingVertical: 7.5,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
