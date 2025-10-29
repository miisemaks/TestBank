import { CurrencyType } from 'shared/types';

export const currencySymbol = (variant: CurrencyType) => {
  switch (variant) {
    case 'dollar':
      return '$';
    case 'euro':
      return '€';
    case 'ruble':
      return '₽';
    default:
      return '';
  }
};

export const formatToPrice = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US');

  return formatter.format(value);
};
