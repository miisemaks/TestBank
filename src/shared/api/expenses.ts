import dayjs from 'dayjs';
import { CurrencyType } from 'shared/types';

export const getExpenses = async () => {
  const dataTemp: {
    title: string;
    data: {
      id: number;
      avatar?: string | null;
      name: string;
      currency: CurrencyType;
      type: 'subscription' | 'one-time';
      expenses: number;
      description: string;
      created_at: string;
    }[];
  }[] = [
    {
      title: 'Today',
      data: [
        {
          id: 0,
          avatar:
            'https://images.ctfassets.net/xjcz23wx147q/iegram9XLv7h3GemB5vUR/0345811de2da23fafc79bd00b8e5f1c6/Max_Rehkopf_200x200.jpeg',
          name: 'Matthew Billson',
          currency: 'dollar',
          type: 'one-time',
          expenses: 56.19,
          description: 'Money Transfer',
          created_at: dayjs().set('h', 12).set('m', 8).toISOString(),
        },
      ],
    },
    {
      title: 'Yesterday',
      data: [
        {
          id: 1,
          avatar:
            'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/250px-Starbucks_Corporation_Logo_2011.svg.png',
          name: 'Starbucks',
          currency: 'dollar',
          type: 'one-time',
          expenses: 122.47,
          description: 'Food',
          created_at: dayjs()
            .subtract(1, 'd')
            .set('h', 19)
            .set('m', 21)
            .toISOString(),
        },
        {
          id: 2,
          avatar:
            'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
          name: 'Netflix',
          currency: 'dollar',
          type: 'subscription',
          expenses: 13.17,
          description: 'Entertainment',
          created_at: dayjs()
            .subtract(1, 'd')
            .set('h', 8)
            .set('m', 53)
            .toISOString(),
        },
      ],
    },
  ];
  return Promise.resolve(dataTemp);
};
