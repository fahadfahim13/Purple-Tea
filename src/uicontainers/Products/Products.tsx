import React, { useState } from 'react';

import ProductsContainer from 'uicontainers/ProductsContainer';
import CartContainer from 'uicontainers/CartContainer';
import useCartOptions from './hooks';
import Footer from 'uicontainers/Footer';
import ProductDetails from 'pages/ProductDetails';
import { Product } from 'components/ProductCard/types';
import { ALL_PRODUCTS } from 'data/products';

const Products = () => {
  const { openCart, handleAddtoCart, handleCloseCart } = useCartOptions();

  const [product, onProductSelect] = useState<Product>(ALL_PRODUCTS[0]);
  const [openDetails, setOpen] = useState(false);

  const handleDetailsClose = () => {
    setOpen(false);
  }

  const handleDetailsOpen = () => {
    setOpen(true);
  }

  const handleProductSelect = (prod: Product) => {
    onProductSelect(prod);
    handleDetailsOpen();
  }

  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer handleAddtoCart={handleAddtoCart} handleProductSelect={handleProductSelect} />
      <ProductDetails product={product} open={openDetails} onclose={handleDetailsClose} handleAddToCart={handleAddtoCart} />
      {/* Shopping Cart */}
      <CartContainer open={openCart} onclose={handleCloseCart} />
      <Footer />
    </>
  );
};

export default Products;
