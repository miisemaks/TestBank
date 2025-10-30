/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './Navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from 'shared/api/client';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';

function App() {
  const { theme_value } = useAppStore();

  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={theme_value === 'dark' ? 'light-content' : 'dark-content'}
          // translucent
          backgroundColor={colors[theme_value].background}
        />
        <Navigation />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
