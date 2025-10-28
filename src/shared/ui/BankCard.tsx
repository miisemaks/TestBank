import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { MasterCard, Visa } from 'shared/icons';
import { Text } from './Text';
import { currencySymbol, formatToPrice } from 'shared/lib';

type Props = {
  variant: 'debit' | 'virtual';
  payment_system: 'visa' | 'mastercard';
  last_card_number: number | string;
  currency: 'dollar' | 'euro' | 'ruble';
  balance: number;
};

export const BankCard = React.memo((props: Props) => {
  const {
    variant,
    payment_system = 'mastercard',
    last_card_number,
    currency,
    balance,
  } = props;
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity style={[styles.main, { width: (width * 142) / 375 }]}>
      <ImageBackground
        source={
          variant === 'virtual'
            ? require('shared/icons/cardBg2.jpg')
            : require('shared/icons/cardBg.jpg')
        }
        style={[styles.imageBg, { width: (width * 142) / 375 }]}
        imageStyle={styles.imageStyle}
      >
        {payment_system === 'mastercard' ? <MasterCard /> : <Visa />}
        <View style={{ gap: 6 }}>
          <Text variant="semi_bold" size={18}>
            {currencySymbol(currency)}
            {formatToPrice(balance)}
          </Text>
          <View style={styles.bottomView}>
            <Text>{variant === 'debit' ? 'Debit' : 'Virtual'}</Text>
            <Text>•• {last_card_number}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  main: {
    gap: 14,
    borderRadius: 16,
  },
  imageStyle: {
    borderRadius: 16,
  },
  imageBg: {
    padding: 12,
    borderRadius: 16,
    gap: 13,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
