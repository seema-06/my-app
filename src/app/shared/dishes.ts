import { Dish } from './dish';

export const DISHES: Dish[] =  [
    {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featued: true,
    lable: 'Hot',
    price: '4.99',
    description: 'A unique combination of pizza',
    Comments: [
        {
            rating: 5,
            comment: 'imagine csdc dcdv dvd',
            author: 'John Lemon',
            date: '2012-10-16'
        },
        {
            rating: 4,
            comment: 'fbfgb csdc dcdv dvd',
            author: 'kaku Lemon',
            date: '2016-10-16'
        }
    ]
},
  {
    id: '1',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'appetizer',
    featued: false,
    lable: 'Hot',
    price: '1.99',
    description: 'Deep fried Zucchini combination of pizza',
    Comments: [
        {
            rating: 5,
            comment: 'imagine csdc dcdv dvd',
            author: 'John Lemon',
            date: '2012-10-16'
        },
        {
            rating: 4,
            comment: 'fbfgb csdc dcdv dvd',
            author: 'kaku Lemon',
            date: '2016-10-16'
        }
    ]
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/uthappizza.png',
    category: 'appetizer',
    featued: false,
    lable: 'New',
    price: '2.99',
    description: 'A unique combination of pizza',
    Comments: [
        {
            rating: 5,
            comment: 'imagine csdc dcdv dvd',
            author: 'John Lemon',
            date: '2012-10-16'
        },
        {
            rating: 4,
            comment: 'fbfgb csdc dcdv dvd',
            author: 'kaku Lemon',
            date: '2016-10-16'
        }
    ]
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/uthappizza.png',
    category: 'dessert',
    featued: false,
    lable: '',
    price: '4.99',
    description: 'A delectable , semi-sweet dish',
    Comments: [
        {
            rating: 5,
            comment: 'test csdc dcdv dvd',
            author: 'John Lemon',
            date: '2012-10-16'
        },
        {
            rating: 4,
            comment: 'fbfgb csdc dcdv dvd',
            author: 'kaku Lemon',
            date: '2016-10-16'
        }
    ]
  }
  ];
