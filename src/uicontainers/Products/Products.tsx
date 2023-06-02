import React from 'react';

import ProductsContainer from 'uicontainers/ProductsContainer';
import CartContainer from 'uicontainers/CartContainer';
import useCartOptions from './hooks';
import Footer from 'uicontainers/Footer';

const Products = () => {
  const { openCart, handleAddtoCart, handleCloseCart } = useCartOptions();

  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer handleAddtoCart={handleAddtoCart} />
      {/* Shopping Cart */}
      <CartContainer open={openCart} onclose={handleCloseCart} />
      <Footer />
    </>
  );
};

export default Products;
