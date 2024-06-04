export const convertToBRL = (value: string | number): string => {
  if (typeof value === 'number')
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  return value;
};
