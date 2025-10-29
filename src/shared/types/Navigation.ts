import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps as BottomTabNavigationScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

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
  Notifications: NavigatorScreenParams<NotificationTopParams>;
};

export type NavigationScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabNavigationScreenProps<BottomTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type NotificationTopParams = {
  All: undefined;
  Payments: undefined;
  System: undefined;
  Delivery: undefined;
  Travel: undefined;
};

export type NotificationTopScreenProps<T extends keyof NotificationTopParams> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<NotificationTopParams, T>,
    NativeStackScreenProps<RootStackParamList>
  >;
