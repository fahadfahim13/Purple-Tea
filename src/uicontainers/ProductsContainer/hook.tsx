import { useState } from 'react';
import { Product } from 'components/ProductCard/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { handleUpdateProducts } from 'store/Products/actions';
import { selectProducts } from 'store/Products/selectors';
import { ALL_PRODUCTS } from 'data/products';

const useProductsLogic = () => {
  const [product, onProductSelect] = useState<Product>(ALL_PRODUCTS[0]);
  const [openDetails, setOpen] = useState(false);

  const handleDetailsClose = () => {
    setOpen(true);
  }

  const handleDetailsOpen = () => {
    setOpen(true);
  }

  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectProducts);

  const onFavoriteChange = (id: number) => {
    const prod: Product = {
      ...allProducts[id],
      isFavorite: !allProducts[id].isFavorite,
    };
    dispatch(handleUpdateProducts({ id, data: prod }));
  };

  const onRatingChange = (id: number, rating: number) => {
    const prod: Product = {
      ...allProducts[id],
      rating: rating,
    };
    dispatch(handleUpdateProducts({ id, data: prod }));
  };

  return {
    allProducts,
    onFavoriteChange,
    onRatingChange,
    openDetails,
    handleDetailsClose,
    handleDetailsOpen,
    product,
    onProductSelect,
  };
};

export default useProductsLogic;
