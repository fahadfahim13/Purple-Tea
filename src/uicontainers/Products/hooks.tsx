import { useState } from 'react';
import useCartItems from 'uicontainers/CartContainer/hooks';
import { Product } from 'components/ProductCard/types';

const useCartOptions = () => {
  const [openCart, setOpenCart] = useState(false);
  const { addToCart } = useCartItems();

  const handleAddtoCart = (product: Product) => {
    addToCart(product);
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  return {
    openCart,
    handleAddtoCart,
    handleOpenCart,
    handleCloseCart,
  };
};

export default useCartOptions;
