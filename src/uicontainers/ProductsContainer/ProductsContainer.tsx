import React from 'react';
import ProductCard from 'components/ProductCard';
import { ProductWrapper } from './ProductContainerStyles';
import { Container, Section } from 'styles/global';
import useProductsLogic from './hook';
import { ProductProps } from './types';
import ProductDetails from 'pages/ProductDetails';
import { Product } from 'components/ProductCard/types';

const ProductsContainer = (props: ProductProps) => {
  const { handleAddtoCart, handleProductSelect } = props;
  const { allProducts, onFavoriteChange, onRatingChange, openDetails, handleDetailsClose, handleDetailsOpen } = useProductsLogic();
  
  return (
    <>
    <Section smPadding="50px 10px" position="relative" inverse id="about" style={{
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '40px' }}>Our Products</h1>
      <Container>
        <ProductWrapper>
          {allProducts.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              rating={product.rating}
              onRatingChange={onRatingChange}
              type={product.type}
              curPrice={product.curPrice}
              prevPrice={product.prevPrice}
              onSale={product.onSale}
              isFavorite={product.isFavorite}
              onFavoriteChange={onFavoriteChange}
              image={product.image}
              weight={product.weight}
              handleAddtoCart={handleAddtoCart}
              openDetails={openDetails}
              handleDetailsClose={handleDetailsClose}
              handleDetailsOpen={handleDetailsOpen}
              onProductSelect={handleProductSelect}
            />
          ))}
        </ProductWrapper>
      </Container>
    </Section>
    </>
  );
};

export default ProductsContainer;
