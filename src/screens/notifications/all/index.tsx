import React from 'react';
import { SectionList, View } from 'react-native';
import { Text } from 'shared/ui/Text';
import { NotificationItem } from './ui/NotificationItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppStore } from 'shared/store';
import { colors } from 'shared/styles/colors';
import dayjs from 'dayjs';

const data: {
  title: string;
  data: {
    id: number;
    title: string;
    description?: string;
    created_at: string;
    price?: number;
    avatar?: string | null;
    price_type?: 'positive' | 'negative' | 'neutral';
  }[];
}[] = [
  {
    title: 'TODAY, 17 JUNE',
    data: [
      {
        id: 1,
        title: 'Received from Anna',
        description: `Debit •• 4385
$4,098.12`,
        created_at: dayjs().toISOString(),
        price: 110,
        price_type: 'positive',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVH99uCJmouWyJq-fjx-lcAr4-j__FBUq-Dg&s',
      },
      {
        id: 2,
        title: 'See our limited offer!',
        description:
          'Would you like to visit new countries? Maybe it’s your time!',
        created_at: dayjs().toISOString(),
        price: undefined,
        price_type: undefined,
        avatar: null,
      },
      {
        id: 3,
        title: 'Sent to •• 2041',
        description: `Debit •• 4385
$4,098.12`,
        created_at: dayjs().toISOString(),
        price: 14.62,
        price_type: 'negative',
        avatar: null,
      },
    ],
  },
  {
    title: 'YESTERDAY, 16 JUNE',
    data: [
      {
        id: 4,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
      {
        id: 5,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
      {
        id: 6,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
    ],
  },
  {
    title: '24 MARCH, 2025',
    data: [
      {
        id: 7,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
      {
        id: 8,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
      {
        id: 9,
        title: 'title',
        description: 'description',
        created_at: dayjs().toISOString(),
        price: 200,
        price_type: 'positive',
        avatar: null,
      },
    ],
  },
];

export const All = () => {
  const insets = useSafeAreaInsets();
  const { theme_value } = useAppStore();

  return (
    <SectionList
      sections={data}
      keyExtractor={item => item.id + ''}
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
