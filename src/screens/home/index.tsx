import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  RefreshControl,
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
import { ExpenseItem } from 'shared/ui/ExpenseItem';
import { useQuery } from '@tanstack/react-query';
import { getExpenses } from 'shared/api/expenses';

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

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ['expenses'],
    queryFn: () => getExpenses(),
  });

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
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}
            onPress={() => {}}
          >
            <IconContainer variant="circle">
              <UserSingle size={16} color={colors[theme_value].foreground} />
            </IconContainer>

            <Text variant="medium" size={16}>
              Charlotte
            </Text>
          </TouchableOpacity>
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
      sections={data ?? []}
      style={[
        styles.main,
        {
          backgroundColor: colors[theme_value].background,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      refreshControl={
        <RefreshControl
          colors={[colors[theme_value].accent]}
          tintColor={colors[theme_value].accent}
          refreshing={isRefetching}
          onRefresh={refetch}
        />
      }
      contentContainerStyle={{ gap: 4 }}
      ListHeaderComponent={
        <View style={{ gap: 24, marginBottom: 32 }}>
          <ScreenButtons
            onPressTravel={() =>
              navigation.navigate('Notifications', {
                screen: 'Travel',
              })
            }
            onPressDelivery={() =>
              navigation.navigate('Notifications', {
                screen: 'Delivery',
              })
            }
            onPressBonuses={() =>
              navigation.navigate('Notifications', {
                screen: 'System',
              })
            }
            onPressSupport={() =>
              navigation.navigate('Notifications', {
                screen: 'System',
              })
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
          <Expenses expenses={5091} onPress={() => {}} />
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
        <View
          style={{
            paddingHorizontal: 16,
            backgroundColor: colors[theme_value].background,
            paddingBottom: 10,
          }}
        >
          <Text variant="medium" size={16}>
            {section.title}
          </Text>
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
