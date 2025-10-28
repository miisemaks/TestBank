export const currencySymbol = (variant: 'dollar' | 'euro' | 'ruble') => {
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
