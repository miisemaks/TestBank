import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BottomTabParamList,
  RootStackParamList,
} from 'shared/types/Navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from 'screens/home';
import { Payments } from 'screens/payments';
import { History } from 'screens/history';
import { Analytics } from 'screens/analytics';
import { Chats } from 'screens/chats/chats';

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Payments" component={Payments} />
      <BottomTab.Screen name="History" component={History} />
      <BottomTab.Screen name="Analytics" component={Analytics} />
      <BottomTab.Screen name="Chats" component={Chats} />
    </BottomTab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
