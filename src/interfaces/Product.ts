import {ICategory} from './Category';

export interface IProduct {
  _id: string;
  name: string;
  description?: string;
  color?: string;
  size?: string;
  category: ICategory;
  img_src: string;
  currency?: string | Element;
  priceWithSale?: number;
  isSale: boolean;
  rating: number;
  ratingVotes: number;
  price: number;
  isLiked: boolean;
  count?: number;
}
