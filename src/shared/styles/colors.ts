type ColorType = {
  background: string;
  textSolid: string;
  textSecondary: string;
  textSecondary2: string;
  textSecondary3: string;
  accent: string;
  container: string;
};

export const colors: { light: ColorType; dark: ColorType } = {
  light: {
    background: '#F7F7F7',
    textSolid: '#000000',
    textSecondary: '#AEAEAE',
    textSecondary2: '#B3B3B3',
    textSecondary3: '#F5EDED',
    accent: '#FE5900',
    container: '#D6D4D4',
  },
  dark: {
    background: '#060503',
    textSolid: '#FFFFFF',
    textSecondary: '#AEAEAE',
    textSecondary2: '#B3B3B3',
    textSecondary3: '#616161',
    accent: '#FE5900',
    container: '#0F0F0F',
  },
};
