import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { QRCode, UserSingle } from 'shared/icons';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { BottomTabScreenProps } from 'shared/types/Navigation';
import { BankCard } from 'shared/ui/BankCard';
import { IconContainer } from 'shared/ui/IconContainer';
import { Text } from 'shared/ui/Text';
import { PlusBankCard } from './ui/PlusBankCard';
import { ScreenButtons } from './ui/ScreenButtons';
import { Expenses } from './ui/Expenses';
import dayjs from 'dayjs';

type Props = BottomTabScreenProps<'Home'>;

const cardsData: {
  id: number;
  payment_system: 'mastercard' | 'visa';
  currency: 'dollar' | 'euro' | 'ruble';
  last_card_number: string;
  type: 'debit' | 'virtual';
  balance: number;
}[] = [
  {
    id: 0,
    payment_system: 'mastercard',
    currency: 'dollar',
    last_card_number: '4385',
    type: 'debit',
    balance: 4098.12,
  },
  {
    id: 1,
    payment_system: 'visa',
    currency: 'dollar',
    last_card_number: '9081',
    type: 'virtual',
    balance: 14.71,
  },
];

export const Home = (props: Props) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { theme_value } = useAppStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: insets.top,
            paddingLeft: 16 + insets.left,
            backgroundColor: colors[theme_value].background,
            paddingRight: 16 + insets.right,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <IconContainer variant="circle">
              <UserSingle size={16} color={colors[theme_value].foreground} />
            </IconContainer>

            <Text variant="medium" size={16}>
              Charlotte
            </Text>
          </View>
          <TouchableOpacity>
            <IconContainer size={40} variant="rounded" transparent>
              <QRCode color={colors[theme_value].foreground} size={20} />
            </IconContainer>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [insets.left, insets.right, insets.top, navigation, theme_value]);

  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor: colors[theme_value].background,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ScreenButtons
        onPressTravel={() => {}}
        onPressDelivery={() => {}}
        onPressBonuses={() => {}}
        onPressSupport={() => {}}
      />
      <Expenses
        expenses={5091}
        onPress={() =>
          navigation.navigate('Notifications', { date: dayjs().toISOString() })
        }
      />
      <FlatList
        data={cardsData}
        keyExtractor={item => item.id + ''}
        renderItem={({ item }) => (
          <BankCard
            payment_system={item.payment_system}
            variant={item.type}
            last_card_number={item.last_card_number}
            currency={item.currency}
            balance={item.balance}
          />
        )}
        style={styles.flatStyle}
        contentContainerStyle={styles.flatContentStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={
          <PlusBankCard
            bank_card_length={cardsData.length}
            onPress={() => {}}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 24,
    gap: 24,
  },
  flatStyle: {
    flexGrow: 0,
    gap: 8,
  },
  flatContentStyle: {
    gap: 8,
    paddingLeft: 16,
  },
});
