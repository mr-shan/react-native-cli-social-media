export type FontWeight = 'thin' | 'regular' | 'medium' | 'semiBold' | 'bold';
export const getFontStyle = (weight: FontWeight) => {
  switch (weight) {
    case 'thin':
      return 'Quicksand-Light';
    case 'regular':
      return 'Quicksand-Regular';
    case 'medium':
      return 'Quicksand-Medium';
    case 'semiBold':
      return 'Quicksand-SemiBold';
    case 'bold':
      return 'Quicksand-Bold';
  }
};
