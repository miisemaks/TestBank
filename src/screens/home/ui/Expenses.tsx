import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatToPrice } from 'shared/lib';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';

type Props = {
  expenses: number;
  onPress: () => void;
};

export const Expenses = (props: Props) => {
  const { expenses, onPress } = props;
  const { theme_value } = useAppStore();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { width: width - insets.left - insets.right }]}>
      <View style={styles.topView}>
        <Text variant="medium" size={21}>
          Expenses in{' '}
          <Text
            variant="medium"
            size={21}
            style={{ color: colors[theme_value].accent }}
            onPress={onPress}
          >
            {dayjs().format('MMMM')}
          </Text>
        </Text>
        <Text
          variant="medium"
          size={21}
          style={{ color: colors[theme_value].textSecondary }}
        >
          ${formatToPrice(expenses ?? 0)}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <View
          style={[
            styles.line,
            {
              flex: 114,
              backgroundColor: '#CC3F02',
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              flex: 85,
              backgroundColor: '#FE5900',
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              flex: 81,
              backgroundColor: '#FF9332',
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              flex: 57,
              backgroundColor: '#FFD8A5',
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { gap: 16, paddingHorizontal: 16 },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomView: { flexDirection: 'row', gap: 2 },
  line: {
    borderRadius: 3,
    height: 8,
  },
});
