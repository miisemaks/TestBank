import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

type AppState = {
  theme: 'system' | 'dark' | 'light';
  theme_value: 'dark' | 'light';
  setAppTheme: (theme: 'system' | 'dark' | 'light') => void;
};

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      theme: 'dark',
      theme_value: 'dark',
      setAppTheme: (theme: 'system' | 'dark' | 'light') =>
        set(state => {
          if (theme === 'system') {
            return {
              ...state,
              theme: theme,
              value: Appearance.getColorScheme() as 'dark' | 'light',
            };
          } else {
            return { ...state, theme: theme, value: theme };
          }
        }),
    }),
    {
      name: 'app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
