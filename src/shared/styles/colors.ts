type ColorType = {
  background: string;
  foreground: string;
  textSolid: string;
  textSecondary: string;
  textSecondary2: string;
  textSecondary3: string;
  accent: string;
  container: string;
  danger: string;
  warning: string;
  skeleton: string;
};

export const colors: { light: ColorType; dark: ColorType } = {
  light: {
    background: '#F7F7F7',
    foreground: '#9C9C9C',
    textSolid: '#000000',
    textSecondary: '#AEAEAE',
    textSecondary2: '#B3B3B3',
    textSecondary3: '#F5EDED',
    accent: '#FE5900',
    container: '#D6D4D4',
    danger: '#CC3F02',
    warning: '#FF9332',
    skeleton: '#3D3B3B',
  },
  dark: {
    background: '#060503',
    foreground: '#FFFFFF',
    textSolid: '#FFFFFF',
    textSecondary: '#AEAEAE',
    textSecondary2: '#B3B3B3',
    textSecondary3: '#616161',
    accent: '#FE5900',
    container: '#0F0F0F',
    danger: '#CC3F02',
    warning: '#FF9332',
    skeleton: '#3D3B3B',
  },
};
