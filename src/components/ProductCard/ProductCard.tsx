import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from '@mui/material';
import { ProductSectionProps } from './types';
import { Button, Row, Col } from 'styles/global';
import {
	ProductColumn, SaleButton, ProdImgWrapper, ProdImage, ProdImageColumn, CategoryTitle, ProductTitle
} from './ProductCardStyles';


const ProductCard = (product: ProductSectionProps) => {
  const { id, name, rating, onRatingChange, type, curPrice, prevPrice=curPrice, onSale=false, image, isFavorite=false, onFavoriteChange = () => {}, handleAddtoCart } = product;

  return (
    <ProductColumn key={id}>
      {/* Product on sale button & Add to Favorite Button. */}
      <Row>
        <Col style={{ alignItems: 'self-start' }}>
          {onSale && <SaleButton>Sale</SaleButton>}
        </Col>
        <Col></Col>
        <Col></Col>
        <Col style={{ alignItems: 'self-end', cursor: 'pointer' }}>
          {isFavorite ? <FavoriteIcon onClick={() => onFavoriteChange(id)} />: <FavoriteBorderIcon onClick={() => onFavoriteChange(id)} />}
        </Col>
      </Row>

      {/* Product Image poriton. */}
      <ProdImageColumn>
        <ProdImgWrapper>
          <ProdImage src={image} />
        </ProdImgWrapper>
      </ProdImageColumn>

      {/* Product Details */}

      <Row><CategoryTitle style={{ marginBottom: '0px' }}> {type} </CategoryTitle></Row>
      <Row><ProductTitle style={{ marginBottom: '0px' }}> {name} </ProductTitle></Row>

      <Row>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue: number | null) => onRatingChange(id, newValue ?? 0)}
        />
      </Row>

      {/* Add to cart button */}

      <Button color='black' onClick={() => handleAddtoCart(product)}>
        <Row>
          <Col style={{ alignItems: 'self-start' }}>Add to Cart</Col>
          <Col style={{ alignItems: 'self-end' }}>$ {curPrice.toFixed(2)}</Col>
        </Row>
      </Button>
      
    </ProductColumn>
  )
}

export default ProductCard