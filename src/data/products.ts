import { Product } from 'components/ProductCard/types';
import t1 from 'media/images/1.png';
import t2 from 'media/images/2.png';
import t3 from 'media/images/3.png';
import t4 from 'media/images/4.png';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 0,
    name: 'Original Purple Tea',
    rating: 5,
    onRatingChange: () => {},
    type: 'Standard Tea Bag',
    curPrice: 580,
    prevPrice: 580,
    onSale: false,
    weight: '40 gm',
    isFavorite: false,
    onFavoriteChange: () => {},
    image: t1,
  },
  {
    id: 1,
    name: 'Lemon Infused Tea',
    rating: 4.2,
    onRatingChange: () => {},
    type: 'Standard Tea Bag',
    curPrice: 580,
    prevPrice: 580,
    onSale: false,
    weight: '40 gm',
    isFavorite: false,
    onFavoriteChange: () => {},
    image: t2,
  },
  {
    id: 2,
    name: 'Strawberry Infused Tea',
    rating: 4.3,
    onRatingChange: () => {},
    type: 'Standard Tea Bag',
    curPrice: 580,
    prevPrice: 580,
    onSale: false,
    weight: '40 gm',
    isFavorite: false,
    onFavoriteChange: () => {},
    image: t3,
  },
  {
    id: 3,
    name: 'Premium Box',
    rating: 4.5,
    onRatingChange: () => {},
    type: 'Premium Tea Box',
    curPrice: 1585,
    prevPrice: 1585,
    onSale: false,
    weight: '30 pieces',
    isFavorite: false,
    onFavoriteChange: () => {},
    image: t4,
  }
];
