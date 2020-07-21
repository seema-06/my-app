import { Comment } from './comment';
export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featued: boolean;
    lable: string;
    price: string;
    description: string;
    Comments: Comment[];
}
