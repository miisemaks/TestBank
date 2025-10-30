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
import { Notifications } from './Notifications';
import {
  Alarm,
  ChevronLeft,
  HomeIcon,
  InvestingAndBanking,
  PieChart,
  Readed,
  TwoBubble,
} from 'shared/icons';
import { colors } from 'shared/styles/colors';
import { useAppStore } from 'shared/store';
import { TouchableOpacity } from 'react-native';
import { fonts } from 'shared/styles/font';

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  const { theme_value } = useAppStore();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors[theme_value].accent,
        tabBarInactiveTintColor: colors[theme_value].foreground,
        tabBarStyle: {
          backgroundColor: colors[theme_value].background,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Inter_18pt-Regular',
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color }) => (
            <InvestingAndBanking size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => <Alarm color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color }) => <PieChart color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => <TwoBubble color={color} size={20} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export const Navigation = () => {
  const { theme_value } = useAppStore();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: colors[theme_value].container,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: colors[theme_value].container,
          },
          headerTitleStyle: {
            color: colors[theme_value].textSolid,
            fontFamily: fonts.medium.fontFamily,
            fontWeight: fonts.medium.fontWeight,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft color={colors[theme_value].textSolid} />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen
          name="Main"
          component={BottomNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Readed color={colors[theme_value].textSolid} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
