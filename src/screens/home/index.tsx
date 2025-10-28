import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { ExpenseItem } from 'shared/ui/ExpenseItem';
import { CurrencyType } from 'shared/types';

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

const data: {
  title: string;
  data: {
    id: number;
    avatar?: string | null;
    name: string;
    currency: CurrencyType;
    type: 'subscription' | 'one-time';
    expenses: number;
    description: string;
    created_at: string;
  }[];
}[] = [
  {
    title: 'Today',
    data: [
      {
        id: 0,
        avatar:
          'https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg',
        name: 'Matthew Billson',
        currency: 'dollar',
        type: 'one-time',
        expenses: 56.19,
        description: 'Money Transfer',
        created_at: dayjs('2025-06-09 12:08').toISOString(),
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        avatar:
          'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/250px-Starbucks_Corporation_Logo_2011.svg.png',
        name: 'Starbucks',
        currency: 'dollar',
        type: 'one-time',
        expenses: 122.47,
        description: 'Food',
        created_at: dayjs('2025-06-08 19:21').toISOString(),
      },
      {
        id: 2,
        avatar:
          'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        name: 'Netflix',
        currency: 'dollar',
        type: 'subscription',
        expenses: 13.17,
        description: 'Entertainment',
        created_at: dayjs('2025-06-08 08:53').toISOString(),
      },
    ],
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
    <SectionList
      sections={data}
      style={[
        styles.main,
        {
          backgroundColor: colors[theme_value].background,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      contentContainerStyle={{ gap: 4 }}
      ListHeaderComponent={
        <View style={{ gap: 24, marginBottom: 32 }}>
          <ScreenButtons
            onPressTravel={() => {}}
            onPressDelivery={() => {}}
            onPressBonuses={() => {}}
            onPressSupport={() => {}}
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
          <Expenses
            expenses={5091}
            onPress={() =>
              navigation.navigate('Notifications', {
                date: dayjs().toISOString(),
              })
            }
          />
        </View>
      }
      keyExtractor={(item, index) => index + ''}
      renderItem={({ item }) => (
        <View
          style={{
            // INFO: отступы добавил по отдельности чтобы в контейнере карт горизотальный скрол не обрезался
            // INFO: в самом компоненте не добавил так как если компонент будет переиспользоваться не включался отступ
            paddingHorizontal: 16,
          }}
        >
          <ExpenseItem
            currency={item.currency}
            expenses={item.expenses}
            sender_name={item.name}
            description="Money Transfer"
            date={item.created_at}
            avatar={item.avatar}
            type={item.type}
            onPress={() => {}}
          />
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View>
          <Text>{section.title}</Text>
        </View>
      )}
    />
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
