import { Product } from 'components/ProductCard/types';

export interface ProductProps {
  handleAddtoCart: (product: Product) => void;
  handleProductSelect: (prod: Product) => void;
}
