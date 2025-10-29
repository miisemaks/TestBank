import React from 'react';
import { RefreshControl, SectionList, View } from 'react-native';
import { Text } from 'shared/ui/Text';
import { NotificationItem } from './ui/NotificationItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from 'shared/api/notification';

export const All = () => {
  const insets = useSafeAreaInsets();
  const { theme_value } = useAppStore();

  const { data, isRefetching, refetch } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getNotifications(),
  });

  return (
    <SectionList
      sections={data ?? []}
      keyExtractor={item => item.id + ''}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={refetch}
          tintColor={colors[theme_value].accent}
          colors={[colors[theme_value].accent]}
        />
      }
      renderItem={({ item }) => (
        <NotificationItem
          type="system"
          avatar={item.avatar}
          price={item.price}
          title={item.title}
          description={item.description}
          created_at={item.created_at}
          currency="dollar"
          price_type={item.price_type}
        />
      )}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 16,
        gap: 16,
        paddingLeft: insets.left + 16,
        paddingRight: insets.right + 16,
      }}
      style={{ gap: 16 }}
      renderSectionHeader={({ section }) => (
        <View
          style={{
            paddingTop: 16,
            backgroundColor: colors[theme_value].container,
          }}
        >
          <Text
            variant="semi_bold"
            style={{ color: colors[theme_value].textSecondary }}
          >
            {section.title}
          </Text>
        </View>
      )}
    />
  );
};
