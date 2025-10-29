import dayjs from 'dayjs';
import { NotificationScreenType } from 'shared/types/Navigation';

export const getNotifications = async () => {
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
      type: NotificationScreenType;
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
          type: 'payments',
        },
      ],
    },
    {
      title: 'YESTERDAY, 16 JUNE',
      data: [
        {
          id: 4,
          title: 'See our limited offer!',
          description:
            'Would you like to visit new countries? Maybe it’s your time!',
          created_at: dayjs()
            .subtract(1, 'd')
            .set('h', 23)
            .set('m', 8)
            .toISOString(),
          price: undefined,
          price_type: undefined,
          avatar: null,
          type: 'travel',
        },
        {
          id: 5,
          title: 'Sent to •• 2041',
          description: `Debit •• 4385
    $4,098.12`,
          created_at: dayjs()
            .subtract(1, 'd')
            .set('h', 6)
            .set('m', 18)
            .toISOString(),
          price: 14.62,
          price_type: 'negative',
          avatar: null,
          type: 'travel',
        },
      ],
    },
    {
      title: '24 OCTOBER, 2025',
      data: [
        {
          id: 7,
          title: 'New login into account',
          description: `You have logged in from a new location:
    iOS 26.0.1 · 109.255.84.7 · Spain`,
          created_at: dayjs('2025-10-24 17:17').toISOString(),
          price: undefined,
          price_type: 'positive',
          avatar: null,
          type: 'delivery',
        },
      ],
    },
  ];

  return Promise.resolve(data);
};
