import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps as BottomTabNavigationScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  Payments: undefined;
  History: undefined;
  Analytics: undefined;
  Chats: undefined;
};

export type NotificationScreenType =
  | 'payments'
  | 'delivery'
  | 'travel'
  | 'system';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Notifications: { date: string; type: NotificationScreenType };
};

export type NavigationScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabNavigationScreenProps<BottomTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;
