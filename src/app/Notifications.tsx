import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { All } from 'screens/notifications/all';
import { Payments } from 'screens/notifications/payments';
import { System } from 'screens/notifications/system';
import { Delivery } from 'screens/notifications/delivery';
import { Travel } from 'screens/notifications/travel';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { fonts } from 'shared/styles/font';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const Notifications = () => {
  const { theme_value } = useAppStore();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors[theme_value].container,
          paddingLeft: insets.left + 16,
          paddingRight: insets.right + 16,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: fonts.regular.fontFamily,
          fontWeight: fonts.regular.fontWeight,
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarActiveTintColor: colors[theme_value].accent,
        tabBarInactiveTintColor: colors[theme_value].textSecondary,
        tabBarIndicatorStyle: {
          backgroundColor: colors[theme_value].accent,
          marginLeft: insets.left + 16,
          marginRight: insets.right + 16,
        },
        sceneStyle: {
          backgroundColor: colors[theme_value].container,
        },
      }}
    >
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="System" component={System} />
      <Tab.Screen name="Delivery" component={Delivery} />
      <Tab.Screen name="Travel" component={Travel} />
    </Tab.Navigator>
  );
};
