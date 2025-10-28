import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { Dot } from './Dot';
import { currencySymbol, formatToPrice } from 'shared/lib';
import dayjs from 'dayjs';
import { CurrencyType } from 'shared/types';
import { Avatar } from './Avatar';

type Props = {
  currency: CurrencyType;
  expenses: number;
  sender_name: string;
  description: string;
  date: string;
  onPress: () => void;
  avatar?: string | null;
  type: 'subscription' | 'one-time';
};

export const ExpenseItem = memo((props: Props) => {
  const {
    currency,
    expenses,
    sender_name,
    description,
    date,
    onPress,
    avatar,
    type,
  } = props;
  const { theme_value } = useAppStore();

  return (
    <TouchableOpacity
      style={[styles.main, { backgroundColor: colors[theme_value].container }]}
      onPress={onPress}
    >
      <Avatar url={avatar} />
      <View style={styles.rightView}>
        <View style={styles.topView}>
          <Text variant="medium" style={{ flex: 1 }} numberOfLines={1}>
            {sender_name}
          </Text>
          <Text variant="medium" numberOfLines={1}>
            {currencySymbol(currency)}
            {formatToPrice(expenses)}
          </Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomDotView}>
            <Dot variant={type === 'subscription' ? 'warning' : 'danger'} />
            <Text
              style={{ flex: 1, color: colors[theme_value].textSecondary2 }}
              numberOfLines={1}
            >
              {description}
            </Text>
          </View>
          <Text style={{ color: colors[theme_value].textSecondary2 }}>
            {dayjs(date).format('MMM D, HH:mm')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  main: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rightView: {
    flex: 1,
    gap: 4,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: 12,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  bottomDotView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
});
