import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { currencySymbol, formatToPrice } from 'shared/lib';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { CurrencyType } from 'shared/types';
import { NotificationScreenType } from 'shared/types/Navigation';
import { Avatar } from 'shared/ui/Avatar';
import { Dot } from 'shared/ui/Dot';
import { Text } from 'shared/ui/Text';

type Props = {
  type: NotificationScreenType;
  avatar?: string | null;
  price?: number;
  title: string;
  description?: string;
  created_at: string;
  price_type?: 'positive' | 'negative' | 'neutral';
  currency?: CurrencyType;
};

export const NotificationItem = (props: Props) => {
  const {
    type,
    avatar,
    price,
    price_type,
    title,
    description,
    currency,
    created_at,
  } = props;
  const { theme_value } = useAppStore();

  const getPriceType = useCallback(
    (value: 'positive' | 'negative' | 'neutral') => {
      switch (value) {
        case 'positive':
          return '+';
        case 'negative':
          return '-';
        default:
          return '';
      }
    },
    [],
  );

  const getTypeName = useCallback((value: NotificationScreenType) => {
    switch (value) {
      case 'delivery':
        return 'Delivery';
      case 'payments':
        return 'Payments';
      case 'travel':
        return 'Travel';
      default:
        return 'System';
    }
  }, []);

  return (
    <View style={styles.main}>
      <Avatar size={42} style={{ borderRadius: 16 }} url={avatar} />
      <View style={styles.viewRight}>
        <View style={styles.viewTop}>
          <View style={styles.viewTitle}>
            <Text variant="medium">{title}</Text>
            <Dot variant="danger" />
          </View>
          {price ? (
            <Text
              variant="semi_bold"
              size={21}
              style={{ color: colors[theme_value].accent }}
            >
              {price_type ? getPriceType(price_type) : null}
              {currency ? currencySymbol(currency) : null}
              {formatToPrice(price)}
            </Text>
          ) : null}
          {description ? (
            <Text style={{ color: colors[theme_value].textSecondary }}>
              {description}
            </Text>
          ) : null}
        </View>
        <Text size={12} style={{ color: colors[theme_value].textSecondary3 }}>
          {dayjs(created_at).format('D MMMM YYYY, HH:mm')} · {getTypeName(type)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    gap: 12,
  },
  viewRight: {
    flex: 1,
    gap: 6,
  },
  viewTop: {
    flex: 1,
    gap: 4,
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
